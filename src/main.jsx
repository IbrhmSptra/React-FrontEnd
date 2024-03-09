import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "react-redux";
import Store from "./redux/store.js";
import DetailTransaksi from "./pages/DetailTransaksi.jsx";
import Recipepage from "./pages/Recipepage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
<<<<<<< HEAD
import KategoriPage from "./pages/KategoriPage.jsx";
import DetailPemesanan from "./pages/DetailPemesanan.jsx";
import Middleware from "./pages/Middleware.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/authpage",
//     element: <Authentication />,
//   },
//   {
//     path: "/detailtransaksi",
//     element: <DetailTransaksi />,
//   },
//   {
//     path: "/favoritepage",
//     element: <FavoritePage />,
//   },
//   {
//     path: "/recipepage/:id",
//     element: <Recipepage />,
//   },
//   {
//     path: "/FavoritePage",
//     element: <FavoritePage />,
//   },
//   {
//     path: "/kategoripage/:id",
//     element: <KategoriPage />,
//   },
//   {
//     path: "/detailpemesanan",
//     element: <DetailPemesanan />,
//   },
// ]);
=======
import Authentication from "./pages/Authenthication.jsx";
import RiwayatPage from "./pages/RiwayatPage.jsx";
import KatagoriPage from "./pages/KatagoriPage.jsx";

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
  {
    path: "/Recipepage",
    element: <Recipepage />,
  },
  {
    path: "/FavoritePage",
    element: <FavoritePage />,
  },
  {
    path: "/KatagoriPage",
    element: <KatagoriPage />,
  },
]);
>>>>>>> feat/RiwayatPage

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Middleware>
                <HomePage />
              </Middleware>
            }
          />
          <Route
            path="/detailtransaksi"
            element={
              <Middleware>
                <DetailTransaksi />
              </Middleware>
            }
          />
          <Route
            path="/favoritepage"
            element={
              <Middleware>
                <FavoritePage />
              </Middleware>
            }
          />
          <Route
            path="/recipepage/:id"
            element={
              <Middleware>
                <Recipepage />
              </Middleware>
            }
          />
          <Route
            path="/recipepage/:id"
            element={
              <Middleware>
                <Recipepage />
              </Middleware>
            }
          />
          <Route
            path="/kategoripage/:id"
            element={
              <Middleware>
                <KategoriPage />
              </Middleware>
            }
          />
          <Route
            path="/detailpemesanan/:id"
            element={
              <Middleware>
                <DetailPemesanan />
              </Middleware>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
