import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import AppLayout from './layout/AppLayout'
import Users from './pages/Users'
import Products from './pages/Products'
import UserDetails from './pages/UserDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path='/dashboard/users' element={<Users />} />
          <Route path='/dashboard/users/user-details' element={<UserDetails />} />
          <Route path='/dashboard/products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
