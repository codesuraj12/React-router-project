import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path :'/',
//     element:<App/>,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       },{
//         path:'about',
//         element:<About/>

//       },{
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element ={<App/>}>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
