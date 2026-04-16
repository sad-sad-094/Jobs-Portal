import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-(--color-background) text-(--color-text-primary)">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
