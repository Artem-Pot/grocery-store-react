import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ReactDOM from 'react-dom/client';
//страницы
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";

import './css/style.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "catalog",
        element: <Catalog />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <RouterProvider router={router} />
    </div>
);
