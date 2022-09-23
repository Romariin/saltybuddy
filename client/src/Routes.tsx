// create basic routes using react-router-dom

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from '@/pages/home';
import '@/styles/index.css';

const myRoutes = () => {
  const routes = (!localStorage.getItem('token')) ?
    <>
      <Route path="/" element={<Home />} />

    </> : <>
      <Route path="/" element={<Home />} />
    </>

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default myRoutes;
