import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chat from './components/Chat';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className='-z-50 mt-26 lg:mt-34'>
          <Outlet />
          <Chat />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
