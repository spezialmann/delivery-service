import Home from './components/Home.vue'
import Lieferant from './components/lieferant/Lieferant.vue'

export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/lieferant',
        component: Lieferant
    },
]