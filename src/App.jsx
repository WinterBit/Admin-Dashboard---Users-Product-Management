import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './pages/Login'
import AppLayout from './layout/AppLayout'
import Users from './pages/Users'
import Products from './pages/Products'
import UserDetails from './pages/UserDetails'
import PrivateRoute from './routes/PrivateRoute'
import { AuthContext } from './context/AuthContext'

function App() {
  const loginState = JSON.parse(localStorage.getItem("loggedIn")) || false
  const [loggedIn, setLoggedIn] = useState(loginState);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<AppLayout />}>
              <Route path='/dashboard/users' element={<Users />} />
              <Route path='/dashboard/users/:id' element={<UserDetails />} />
              <Route path='/dashboard/products' element={<Products />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App
