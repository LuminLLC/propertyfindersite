import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RootLayout from "./layouts/root-layout";
import IndexPage from "./routes";
import AboutUs from './routes/about';
import Process from "./routes/process"
import Blog from "./routes/blog"
import SingleBlog from "./components/singleBlog"
import Listings from "./routes/listings"
import Testimonials from "./routes/testimonials"
import FAQs from "./routes/faq"
import ContactUs from "./routes/contact"
import SignIn from "./routes/signin"
import SignUp from "./routes/signup"
import { RouterProvider, createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/process", element: <Process /> },
      { path: "/blog", element: <Blog /> },
      { path: "/singleBlog", element: <SingleBlog /> },
      { path: "/listings", element: <Listings /> },
      { path: "/singleBlog", element: <SingleBlog /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },


      // {
      //   element: <DashboardLayout />,
      //   path: "dashboard",
      //   children: [
      //     { path: "/dashboard", element: <DashboardPage /> },
      //     { path: "/dashboard/invoices", element: <InvoicesPage /> },
      //   ],
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
