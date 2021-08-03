import { createRouter, createWebHashHistory } from 'vue-router';
// import App from './App.vue';
import Analysis from './pages/Analysis.vue';
import HelloWorldPage from './pages/HelloWorldPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/hello' },
        { path: '/analysis', component: Analysis },
        { path: '/hello', component: HelloWorldPage }
    ]
});

export default router;