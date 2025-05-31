import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Paste } from './components/Paste'
import { ViewPaste } from './components/ViewPaste'
import { RouterProvider } from 'react-router-dom'
const router=createBrowserRouter(
     
     [   
          {
              path:"/",
              element:
              <div>
                <Navbar/>
                <Home/>
              </div>
         
            },

         {
              path:"/pastes",
              element:
              <div>
                 <Navbar/>
                  <Paste/>
              </div>
         
         
         
            },


            {
              path:"/pastes/:id",
              element:
              <div>
                   <Navbar/>
                   <ViewPaste/>
              </div>
            },


     ]

);


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
       <RouterProvider router={router} />
   </div>
  )
}

export default App
