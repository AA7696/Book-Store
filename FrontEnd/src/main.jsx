import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Layout from './Layout.jsx';
import About from './About/About.jsx';
import List  from './BookList/List.jsx';
import Create from './Create/Create.jsx';
import NotFound from './Not Found/NotFound.jsx';
import Edit from './Edit Books/Edit.jsx';
import SingleBook from '../component/SingleBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "books",
        element: <List />,
      },
      {
        path: "books/:id",
        element: <SingleBook />

      },
      {
        path: "create",
        element: <Create />
      },
      {
        path: "editbook/:id",
        element: <Edit />

      },
      {
        path: "*",
        element: <NotFound />
      }


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
