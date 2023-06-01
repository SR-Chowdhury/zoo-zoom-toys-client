import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './Providers/AuthProvider';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import SingleToy from './Pages/SingleToy/SingleToy';
import AddToy from './Pages/AddToy/AddToy';
import MyToy from './Pages/MyToy/MyToy';
import PrivateRoute from './Routes/PrivateRoute';
import UpdateToy from './Pages/UpdateToy/UpdateToy';
import AllToys from './Pages/AllToys/AllToys';
import Blog from './Pages/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('https://animal-toys-server-phi.vercel.app/toys')
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/toys/:id',
        element: <PrivateRoute><SingleToy/></PrivateRoute>,
        loader: ({params}) => fetch(`https://animal-toys-server-phi.vercel.app/toys/${params.id}`)
      },
      {
        path: '/add-toy',
        element: <PrivateRoute><AddToy/></PrivateRoute>
      },
      {
        path: '/custom-toy/:id',
        element: <UpdateToy/>,
        loader: ({params}) => fetch(`https://animal-toys-server-phi.vercel.app/custom-toy/${params.id}`)
      },
      {
        path: '/my-toy',
        element: <PrivateRoute><MyToy/></PrivateRoute>
      },
      {
        path: '/all-toys',
        element: <AllToys/>,
        loader: () => fetch('https://animal-toys-server-phi.vercel.app/all-toys?limit=20')
      },
      {
        path: '/all-toys/:id',
        element: <PrivateRoute><SingleToy/></PrivateRoute>,
        loader: ({params}) => fetch(`https://animal-toys-server-phi.vercel.app/custom-toy/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
            <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
