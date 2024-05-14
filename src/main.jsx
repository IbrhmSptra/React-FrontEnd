import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "react-redux";
import Store from "./redux/store.js";
import DetailTransaksi from "./pages/DetailTransaksiPage.jsx";
import Recipepage from "./pages/Recipepage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import KategoriPage from "./pages/KategoriPage.jsx";
import DetailPemesanan from "./pages/SummaryOrderPage.jsx";
import Middleware from "./pages/Middleware.jsx";
import RiwayatPage from "./pages/RiwayatPage.jsx";
import axios from "axios";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
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
          path="/detailtransaksi/:id"
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
          path="/riwayatpage"
          element={
            <Middleware>
              <RiwayatPage />
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
);
