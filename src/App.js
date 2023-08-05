import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Routes/Route'
import { UserProvider } from './pages/Authentication/userContext'

function App() {
  return (
    <UserProvider>
  <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
    </UserProvider>
  
  )
}

export default App;