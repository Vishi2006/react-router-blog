import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import AboutMe from './Components/About/AboutMe.jsx'
import AboutProject from './Components/About/AboutProject.jsx'
import LazyLoad from './Components/LazyLoad/LazyLoad.jsx'
import DynamicRoutes from './Components/DynamicRoutes/DynamicRoutes.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Notfound from './Components/NotFound/Notfound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>,
        children: [
          {
            path: "aboutMe",
            element: <AboutMe/>
          },
          {
            path: "aboutProject",
            element: <AboutProject/>
          }
        ]
      },
      {
        path: "lazyLoad",
        element: <LazyLoad/>
      },
      {
        path: "dynamicRoutes",
        element: <DynamicRoutes/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "notFound",
        element: <Notfound/>
      },
      {
        path: "*",
        element: <Notfound/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
