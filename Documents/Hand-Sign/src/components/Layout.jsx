import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = () => {
  return <div className="layout bg-gradient-to-br">
      <div className="bg-mesh"></div>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>;
};
export default Layout;