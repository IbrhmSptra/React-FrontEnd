import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "react-redux";
import Store from "./redux/store.js";
import DetailTransaksi from "./pages/DetailTransaksi.jsx";
import Recipepage from "./pages/Recipepage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import KategoriPage from "./pages/KategoriPage.jsx";
import DetailPemesanan from "./pages/DetailPemesanan.jsx";

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
    path: "/recipepage/:id",
    element: <Recipepage />,
  },
  {
    path: "/FavoritePage",
    element: <FavoritePage />,
  },
  {
    path: "/kategoripage/:id",
    element: <KategoriPage />,
  },
  {
    path: "/detailpemesanan",
    element: <DetailPemesanan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
