import { lazy } from 'react';
import { RouteObject, Navigate, createBrowserRouter } from 'react-router';

const Main = lazy(() => import('@/views/main/main'));
const NotFound = lazy(() => import('@/views/notfound/notfound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/main" />
  },
  {
    path: '/main',
    element: <Main />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

const router = createBrowserRouter(routes);

export default router;
