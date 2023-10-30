import React from "react";
import '../Styles/Layout.css';
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <>
      <header className='container'>
        <NavBar/>
       
      </header>

      <main className='container'>
          <Outlet/>
      </main>

      <footer className='container'>Footer</footer>
    </>
  );
};
