import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import AddPlant from "./views/AddPlant/AddPlant"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>
  },
  {
    path:"/add",
    element: <AddPlant/>
  }
])

root.render(<RouterProvider router={router} />)



