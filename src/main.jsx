import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import ReactDOM
import { Provider } from "react-redux";
import store from "./store/GlobalStore"; // ✅ Ensure correct path

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./index.css";
import Layout from "./Layout.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Registration from "./components/Registration.jsx";
import Login from './pages/LoginPage.jsx'
import FoodList from "./components/FoodList.jsx";
import Profile from "./pages/Profile.jsx";
import Logout from "./components/Logout.jsx";
import Cart from "./components/Cart.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<FoodList />} />
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Route>
  )
);

// ✅ Correct ReactDOM usage
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
