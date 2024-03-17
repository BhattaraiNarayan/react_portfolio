import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body.jsx'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/react_portfolio",
    element: <App />,
    children: [
      {
        path: "/react_portfolio" || "/react_portfolio/home",
        element: <Body />,
      },
      {
        path: "/react_portfolio/about",
        element: <About />,
      },
      {
        path: "/react_portfolio/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/react_portfolio/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
