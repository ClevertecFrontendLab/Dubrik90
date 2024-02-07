import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import { Layout } from '@components/layout';

const publicRoutes: RouteObject[] = [
    {
        element: <div>login</div>,
        path: '/login',
    },
];

const privateRoutes: RouteObject[] = [
    {
        element: <MainPage />,
        path: '/',
    },
    {
        element: <div>calendar</div>,
        path: '/calendar',
    },
];

const router = createBrowserRouter([
    {
        children: privateRoutes,
        element: <PrivateRoutes />,
    },
    ...publicRoutes,
]);

function PrivateRoutes() {
    const isAuthenticated = true;

    return isAuthenticated ? <Layout /> : <Navigate to={'/login'} />;
}

export const Router = () => {
    return <RouterProvider router={router} />;
};
