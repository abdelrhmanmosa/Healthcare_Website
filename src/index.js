import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./pages/Home/Home";
import AboutUS from "./pages/AboutUS/AboutUS";
import OurTeam from "./pages/OurTeam/OurTeam";
import Booking from "./pages/Booking/Booking";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";
import Faq from "./pages/Faqs/Faq";
import React from "react";
import Services from "./pages/Service/Services";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ContactUs from "./pages/ContactUs/ContactUs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
    errorElement: <h1> Sorry .........................</h1>,
  },
  {
    path: "/AboutUS",
    element: <AboutUS />,    
  },
  {
    path: "/OurTeam",
    element: <OurTeam />,    
  },
  {
    path: "/Booking",
    element: <Booking />,    
  },
  {
    path: "/Register",
    element: <Register />,    
  },
  {
    path: "/Login",
    element: <Login />,    
  },
  {
    path: "/Faq",
    element: <Faq />,    
  },
  {
    path: "/Services",
    element: <Services />,    
  },
  {
    path: "/ServiceDetails",
    element: <ServiceDetails />,    
  },
  {
    path: "/Blogs",
    element: <Blogs />,    
  },
  {
    path: "/BlogDetails",
    element: <BlogDetails />,    
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,    
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
