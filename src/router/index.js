import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import SearchResult from '@/components/SearchResult.vue';

const routes = [
    {
        path : '/',
        name : 'home',
        component: HomeView
    },

    {
        path: "/search",
        name: "search",
        component: SearchResult
        // props: (route) => ({ breedName: route.query.breedName }),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
  
export default router