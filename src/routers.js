import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        name: 'meu-dengo',
        path: '/',
        component: () => import('./views/meu-dengo/meu_dengo'),
    },
    {
        name: 'making-of',
        path: '/making-of',
        component: () => import('./views/making-of/making_of'),
    },
    {
        name: 'my-message',
        path: '/my-message',
        component: () => import('./views/my-message/my_message'),
    }
]

export default new VueRouter({routes})

















