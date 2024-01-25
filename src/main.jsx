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
import AllContest from './Pages/AllContest/AllContest';
import Details from './Pages/AllContest/Details';
import PrivetRoute from './Router/PrivetRoute';
import CreatorDashboard from './Pages/Layout/CreatorDashboard';
import UserDashboard from './Pages/Layout/UserDashboard';
import Dashboard from './Pages/Layout/Dashboard';









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
  {
    path: "/allContest",
    element: <PrivetRoute><AllContest></AllContest></PrivetRoute>
  },
  {
    path: "/details/:id",
    element: <PrivetRoute><Details></Details></PrivetRoute>,
    loader: ({params}) => fetch(`https://contest-creation-server.vercel.app/sixcard/${params.id}`) 
  },
  {
    path: "/Dashboard",
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
  },
  {
    path: "/CreatorDashboard",
    element: <PrivetRoute><CreatorDashboard></CreatorDashboard></PrivetRoute>,
  },
  {
    path: "/UserDashboard",
    element: <PrivetRoute><UserDashboard></UserDashboard></PrivetRoute>,
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
