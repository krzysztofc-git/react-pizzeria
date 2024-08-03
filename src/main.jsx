import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Reservation from "./pages/Reservation.jsx";
import Main from "./pages/Main.jsx";
import Status from "./pages/Status.jsx";
import Gallery from "./pages/Gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "reservation",
        element: <Reservation />
      },
      {
        path: "status",
        element: <Status />
      },
      {
        path: "gallery",
        element: <Gallery />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
