import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'Продажа и сервисный ремонт сварочных агрегатов Denyo | ПНЕВМОМАШ-СУРГУТ',
                description: '',
            },
            children: [],
        },
        {
            path: '/privacy',
            name: 'privacy',
            components: {
                //aside: Aside,
                default: () => import('@/components/PrivacyPolicy.vue')
            },
            meta: {
                title: 'Политика конфиденциальности | ПНЕВМОМАШ-СУРГУТ',
                description: '',
            },
            children: [],
        },
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;