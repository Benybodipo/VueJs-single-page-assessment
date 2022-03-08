import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Billing from '../views/Billing.vue';
import Test from '../views/Test.vue';

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/billing/:account_id',
        name: "Billing",
        component: Billing
    },
    {
        path: '/test',
        name: "Test",
        component: Test
    }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;