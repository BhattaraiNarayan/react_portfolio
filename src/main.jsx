import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';
import Index from './components/Index.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
  {
    path: "/react_portfolio/",
    element: <App />,
    children: [
      {
        path: "/react_portfolio/",
        element: <Index />,
      },
      {
        path: "/react_portfolio/home",
        element: <Home />,
      },
      {
        path: "/react_portfolio/about",
        element: <About />,
      },
      {
        path: "/react_portfolio/skills",
        element: <Skills />,
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
