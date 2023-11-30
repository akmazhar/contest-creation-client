import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import UserProfile from './Pages/UserProfile/UserProfile';
import AuthProvider from './AuthProvider/AuthProvider';







const router = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
  {
      path : "/",
      element : <Home></Home>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/userProfile",
    element: <UserProfile></UserProfile>
  },

  ]
  },
]);

export default router;

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
  <React.StrictMode>
    <AuthProvider>
 <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
  </div>
)
