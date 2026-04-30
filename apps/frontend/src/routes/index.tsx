import { createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import JobsPage from '../pages/JobsPage';
import JobDetailPage from '../pages/JobDetailPage';
import ApplicationsPage from '../pages/ApplicationsPage';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'layout',
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  component: HomePage,
});

const jobsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/jobs',
  component: JobsPage,
});

const jobDetailRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/jobs/$id',
  component: JobDetailPage,
});

const applicationsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/applications',
  component: ApplicationsPage,
});

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([homeRoute, jobsRoute, jobDetailRoute, applicationsRoute]),
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
