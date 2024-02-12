import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import { Layout } from '@components/layout';
import { Routs } from './routTypes.ts';

const publicRoutes: RouteObject[] = [
    {
        element: <div>login</div>,
        path: Routs.LOGIN,
    },
];

const privateRoutes: RouteObject[] = [
    {
        element: <MainPage />,
        path: Routs.MAIN,
    },
    {
        element: <div>calendar</div>,
        path: Routs.CALENDAR,
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

    return isAuthenticated ? <Layout /> : <Navigate to={Routs.LOGIN} />;
}

export const Router = () => {
    return <RouterProvider router={router} />;
};
