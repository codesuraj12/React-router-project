import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Follower from './components/Follower/Follower.jsx'

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
      <Route path='' element ={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='contact' element ={<Contact/>}/>
      <Route path='user/:userid' element ={<User/>}/>
      <Route path='follower' element ={<Follower/>}/>
  
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
