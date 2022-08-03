import { createRouter, createWebHistory } from "vue-router";

import HomeApp from "@/views/home/HomeApp.vue"
import SignIn from "@/views/login/SignIn.vue"
import SignUp from "@/views/login/SignUp.vue"

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeApp,
        meta: {
            title: "Home"
        }
    },
    {
        name: 'SignIn',
        path: '/signin',
        component: SignIn,
        meta: {
            title: "Sign In"
        }
    },
    {
        name: 'SignUp',
        path: '/signup',
        component: SignUp,
        meta: {
            title: "Sign Up"
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.afterEach((to) => {
    document.title = to.meta.title
})

export default router