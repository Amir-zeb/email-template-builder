import {
    Home,
    PageBuilder,
    PageRenderer,
    Pages,
} from '../screens';

export const myRoutes = [
    {
        path: '/',
        element: <Pages />,
        protected: true,
        layout: true
    },
    {
        path: '/pages/:slug',
        element: <PageRenderer />,
        protected: true,
        layout: false
    },
    {
        path: '/page-builder/:id',
        element: <PageBuilder />,
        protected: true,
        layout: false
    },
]