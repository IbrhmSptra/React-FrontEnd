import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "react-redux";
import Store from "./redux/store.js";
import DetailTransaksi from "./pages/DetailTransaksi.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";

import Authentication from "./pages/Authenthication.jsx";
import RiwayatPage from "./pages/RiwayatPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/detailtransaksi",
    element: <DetailTransaksi />,
  },

  {
    path: "/favoritepage",
    element: <FavoritePage />,
  },

  {
    path: "/Authentication",
    element: <Authentication />,
  },
  {
    path: "/riwayatpage",
    element: <RiwayatPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
