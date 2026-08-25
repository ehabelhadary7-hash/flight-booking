import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Flights from './Components/Flights/Flights'
import FlightDetails from "./Components/FlightDetails/FlightDetails";
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import Signup from './Components/Signup/Signup'
import Register from './Components/Register/Register'
import Admin from './Components/Admin/Admin'
import Dashboard from "./Components/Admin/Dashboard";
import Products from "./Components/Admin/Products";
import Orders from "./Components/Admin/Orders";
import Users from "./Components/Admin/Users";
import Messages from "./Components/Admin/Messages";
import Settings from "./Components/Admin/Settings";
import Footer from './Components/Footer/Footer'
import NotFound from './Components/NotFound/NotFound'


const App = () => {

  const router = createBrowserRouter([
    {path: "", element: <Layout />, children: [
      {index: true, element: <Home />},
      {path: "about", element: <About />},
      {path: "contact", element: <Contact />},
      {path: "flights", element: <Flights />},
      {
        path: "FlightDetails",
        element: <FlightDetails />,
      },
      {path: "cart", element: <Cart />},
      {path: "checkout", element: <Checkout />},
      {path: "login", element: <Login />},
      {path: "profile", element: <Profile />},
      {path: "signup", element: <Signup />},
      {path: "register", element: <Register />},
      {
        path: "admin",
        element: <Admin />,
        children: [
          {index: true, element: <Dashboard />},
          {path: "products", element: <Products />},
          {path: "orders", element: <Orders />},
          {path: "users", element: <Users />},
          {path: "messages", element: <Messages />},
          {path: "settings", element: <Settings />}
        ]},
      {path: "*", element: <NotFound />}
    ]}
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
