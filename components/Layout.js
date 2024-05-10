import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer className="bg-blue-500 text-white text-center p-4 sticky bottom-0">
        @Copyright 2024 Flash Card App
      </footer>
    </>
  );
};

export default Layout;
