import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./ProtectedRoutes";
import {
  HomePage,
  ProductsList,
  ProductDetail,
  Login,
  Register,
  CartPage,
} from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              {" "}
              <CartPage />{" "}
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
};
