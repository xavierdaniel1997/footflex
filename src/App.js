import Footer from "./components/Footer";
import LoginSignin from "./components/LoginSignin";
import NavBar from "./components/NavBar";
import OTPVerification from "./components/OTPVerification";
import HomePage from "./pages/HomePage";

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ShoppingPage from "./components/ShoppingPage";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProductPage from "./pages/ProductPage";
import MensShoesPage from "./pages/MensShoesPage";
import WomensShoesPage from "./pages/WomensShoesPage";
import KidsShoesPage from "./pages/KidsShoesPage";

function App() {
  const AppLayout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/menshop",
          element: <MensShoesPage />,
        },
        {
          path: "/womenshop",
          element: <WomensShoesPage />,
        },
        {
          path: "/kidshop",
          element: <KidsShoesPage />,
        },
        {
          path: "/product/:id",
          element: <ProductPage/>,
        },
        {
          path: "/profile",
          element: <ProfilePage/>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginSignin />,
    },
    {
      path: "/otp",
      element: <OTPVerification />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

