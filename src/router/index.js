import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Billing from '../views/Billing.vue';

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/billing',
        name: "Billing",
        component: Billing
    }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;