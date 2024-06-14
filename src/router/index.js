import {createRouter, createWebHistory} from 'vue-router'

import LoginPage from '@/components/Auth/LoginPage.vue';

import RegisterPage from '@/components/Auth/RegisterPage.vue'

import ServicePage from '@/components/page/ServicePage.vue'


const routes = [

    // { 
    //     path: '/', 
    //     redirect: '/home'
    // },

    { 
        path:'/services',   
        
        component:ServicePage, 
        
        meta: { requiresAuth: true } 
    },

    { 
        path: '/',
    
        component: RegisterPage, 
        
        meta: { requiresAuth: false } 
    },

    { 
        path: '/login',
    
        component: LoginPage,
    
        meta: { requiresAuth: false } 

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes,

});

router.beforeEach((to, from, next) => {

    const isAuthenticated = !!localStorage.getItem('token');

    if(to.meta.requiresAuth && !isAuthenticated) {

        next('/login');
        
    }else {

        next();

    }

});

export default router;
