import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './component/Header/Header.jsx'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Contact from './component/contact/Contact.jsx'
import Home from './component/Home/Home.jsx'
import Github from './component/github/Github.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "",
        element : <Home/>
      },
      {
        path : "github",
        element : <Github/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
  
)
