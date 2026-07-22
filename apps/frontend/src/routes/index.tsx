import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
  HeadContent,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import JobsPage from '../pages/JobsPage';
import JobDetailPage from '../pages/JobDetailPage';
import ApplicationsPage from '../pages/ApplicationsPage';

const SITE_URL = 'https://jobs-portal-frontend-ashy.vercel.app';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <HeadContent />
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
  head: () => ({
    meta: [
      { title: 'Job Portal — Find your next role' },
      {
        name: 'description',
        content:
          'Browse open roles across companies and apply directly. Filter by experience level, modality and technology.',
      },
      { property: 'og:title', content: 'Job Portal — Find your next role' },
      { property: 'og:url', content: `${SITE_URL}/` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/` }],
  }),
});

const jobsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/jobs',
  component: JobsPage,
  head: () => ({
    meta: [
      { title: 'Open Jobs — Job Portal' },
      {
        name: 'description',
        content: 'Search and filter open job listings by experience, modality and technology.',
      },
      { property: 'og:title', content: 'Open Jobs — Job Portal' },
      { property: 'og:url', content: `${SITE_URL}/jobs` },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/jobs` }],
  }),
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
  head: () => ({
    meta: [
      { title: 'My Applications — Job Portal' },
      {
        name: 'description',
        content: 'Track the status of your submitted job applications.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
  }),
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
