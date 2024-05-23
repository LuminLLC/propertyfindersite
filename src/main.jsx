// src/main.jsx
import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './fireabse.js';
import RootLayout from './layouts/root-layout';
import IndexPage from './routes';
import AboutUs from './routes/about';
import Process from './routes/process';
import Blog from './routes/blog';
import SingleBlog from './components/singleBlog';
import Listings from './routes/listings';
import Testimonials from './routes/testimonials';
import FAQs from './routes/faq';
import ContactUs from './routes/contact';
import SignIn from './routes/signin';
import SignUp from './routes/signup';
import Dashboard from './routes/dashboard';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return <div>Loading...</div>;

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

const ProtectedRoute = ({ element }) => {
  const user = useAuth();
  return user ? element : <Navigate to="/signin" />;
};

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
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/dashboard", element: <ProtectedRoute element={<Dashboard />} /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
