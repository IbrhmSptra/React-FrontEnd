import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "react-redux";
import Store from "./redux/store.js";
import DetailTransaksi from "./pages/DetailTransaksi.jsx";
import DetailPemesanan from "./pages/DetailPemesanan.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/DetailTransaksi",
    element: <DetailTransaksi />,
  },

  {
    path: "/DetailPemesanan",
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
