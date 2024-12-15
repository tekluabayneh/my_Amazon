import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "./Utlity/Loader/Loader";
import SecureRoute from "./components/SecureRoute/SecureRoute";
const Order = React.lazy(() => import("./pages/Orders/Order"));
const Auth = React.lazy(() => import("./pages/Auth/Auth"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage/Error"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));
const HorizontalproductDetsil = React.lazy(() =>
  import("./components/HorizontalScrollproductDetsil/HorizontalproductDetsil")
);
const Footer = React.lazy(() => import("./components/Fotter/Fotter"));
const Index = React.lazy(() => import("./pages/index/Index"));
const Cart = React.lazy(() => import("./pages/Cart/Cart"));
const ProductDetail = React.lazy(() =>
  import("./pages/Product_Details/ProductDetail")
);
const Product = React.lazy(() => import("./pages/product/Product"));
const Payment = React.lazy(() => import("./pages/Payment/Payment"));

const MainRouter = () => {
  return (
    <>
      <Router>
        <Suspense fallback={Loader}>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <Suspense fallback={Loader}>
                    <Index />
                  </Suspense>
                }
              />

              <Route
                path="/product"
                element={
                  <Suspense fallback={Loader}>
                    <Product />
                  </Suspense>
                }
              />
              <Route
                path="/productDetail/:ProductId"
                element={
                  <Suspense fallback={Loader}>
                    <ProductDetail />
                  </Suspense>
                }
              />
              <Route
                path="/cart"
                element={
                  <Suspense fallback={Loader}>
                    <Cart />
                  </Suspense>
                }
              />
              <Route
                path="/HorizontalproductDetsil/:ProductId"
                element={
                  <Suspense fallback={Loader}>
                    <HorizontalproductDetsil />
                  </Suspense>
                }
              />

              <Route
                path="/payment"
                element={
                  <Suspense fallback={Loader}>
                    <SecureRoute
                      msg={"you must have login to pay"}
                      redirect={"/payment"}
                    >
                      <Payment />
                    </SecureRoute>
                  </Suspense>
                }
              />

              <Route
                path="/order"
                element={
                  <Suspense fallback={Loader}>
                    <SecureRoute
                      msg={"you must have login to order"}
                      redirect={"/order"}
                    >
                      <Order />
                    </SecureRoute>
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="/Auth"
              element={
                <Suspense fallback={Loader}>
                  <Auth />
                </Suspense>
              }
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default MainRouter;
