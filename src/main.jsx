import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/WebContent/HomePage.jsx";
import { Provider } from "react-redux";
import Store from "./redux/store.js";
import DetailTransaksi from "./pages/WebContent/DetailTransaksiPage.jsx";
import Recipepage from "./pages/WebContent/Recipepage.jsx";
import FavoritePage from "./pages/WebContent/FavoritePage.jsx";
import KategoriPage from "./pages/WebContent/KategoriPage.jsx";
import DetailPemesanan from "./pages/WebContent/SummaryOrderPage.jsx";
import ProtectedRoute from "./pages/Middleware/ProtectedRoute.jsx";
import ProtectedAuth from "./pages/Middleware/ProtectedAuth.jsx";
import RiwayatPage from "./pages/WebContent/RiwayatPage.jsx";
import axios from "axios";
import AuthenticationPage from "./pages/WebContent/AuthenthicationPage.jsx";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <ProtectedAuth>
              <AuthenticationPage />
            </ProtectedAuth>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detailtransaksi/:id"
          element={
            <ProtectedRoute>
              <DetailTransaksi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favoritepage"
          element={
            <ProtectedRoute>
              <FavoritePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/riwayatpage"
          element={
            <ProtectedRoute>
              <RiwayatPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipepage/:id"
          element={
            <ProtectedRoute>
              <Recipepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipepage/:id"
          element={
            <ProtectedRoute>
              <Recipepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kategoripage/:id"
          element={
            <ProtectedRoute>
              <KategoriPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detailpemesanan/:id"
          element={
            <ProtectedRoute>
              <DetailPemesanan />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
