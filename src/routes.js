import ToDo from './components/ToDo';
import HomePage from './components/HomePage';

export const routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: '/todo',
        component: ToDo
    }
]