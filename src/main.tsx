import ReactDOM from "react-dom/client";
import "./index.css";
import { StoreProvider } from "./Contexts";
import HomePage from "./screens/HomePage/HomePage";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Loading from "./components/Loading";
const LoginSignUpPage = React.lazy(() => import("./screens/LoginAndSignup"));
const PaintingDetail = React.lazy(
  () => import("./screens/PaintingDetail/PaintingDetail")
);
const ViewRoom = React.lazy(() => import("./screens/ViewRoom"));
const PaintingStack = React.lazy(
  () => import("./screens/HomePage/PaintingStack/Stack")
);
const SignUpScreen = React.lazy(
  () => import("./screens/LoginAndSignup/signup")
);
const LoginScreen = React.lazy(() => import("./screens/LoginAndSignup/Login"));
const ArtistsScreen = React.lazy(() => import("./screens/ArtistsScreen"));
const SculpturesScreen = React.lazy(() => import("./screens/SculpturesScreen"));
const PaintingScreen = React.lazy(() => import("./screens/PaintingScreen"));
const ProfileScreen = React.lazy(() => import("./screens/ProfileScreen"));
const DashBoardScreen = React.lazy(
  () => import("./screens/ProfileScreen/Dashboard")
);
const ArtistSelftScreen = React.lazy(
  () => import("./screens/ArtistsScreen/ArtistSelfScreen")
);
const AddToCart = React.lazy(() => import("./screens/AddToCart"));

export const pathPage = {
  HomePage: "/",
  Auth: "/auth/register",
  signup: "/auth/register/signup",
  Login: "/auth/register/login",
  Product: "/product",
  View: "/product/view/",
  artists: "/artists" || "/product/",
  Sculpture: "/sculpture",
  Painting: "/painting",
  Profile: "/account",
  Dash: "/account",
  Orders: "/account/orders",
  ArtistSelfScreen: "/artists/:id",
  AddToCart: "/cart",
  Drawing: "/drawing",
};

const router = createBrowserRouter([
  {
    path: pathPage.HomePage,
    element: <HomePage />,
    children: [
      {
        path: pathPage.HomePage,
        element: <PaintingStack />,
      },
      {
        path: pathPage.Product,
        element: <PaintingDetail />,
      },
      {
        element: <ArtistsScreen />,
        path: pathPage.artists,
      },
      {
        element: <SculpturesScreen />,
        path: pathPage.Sculpture,
      },
      {
        element: <PaintingScreen />,
        path: pathPage.Painting,
      },
      {
        element: <ArtistSelftScreen />,

        path: "/artistsSelf/:id",
      },
      {
        element: (
          <Suspense fallback={<Loading />}>
            <AddToCart />
          </Suspense>
        ),
        path: pathPage.AddToCart,
      },
      {
        element: (
          <Suspense>
            <h1 className="mt-36">drawing</h1>
          </Suspense>
        ),
        path: pathPage.Drawing,
      },
    ],
  },
  {
    path: pathPage.View,
    element: <ViewRoom />,
  },
  {
    path: pathPage.Auth,
    element: <LoginSignUpPage />,
    children: [
      {
        path: pathPage.Login,
        element: <LoginScreen />,
      },
      {
        path: pathPage.Auth,
        element: <SignUpScreen />,
      },
    ],
  },
  {
    element: <ProfileScreen />,
    path: pathPage.Profile,
    children: [
      {
        element: (
          <Suspense fallback={<Loading />}>
            <DashBoardScreen />
          </Suspense>
        ),
        path: pathPage.Profile,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </>
);
