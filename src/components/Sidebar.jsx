import { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import dashboard from '../assets/dashboard.svg'
import { AuthContext } from '../context/AuthContext'

import { LuLogOut } from "react-icons/lu";
import { IoCubeOutline } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


function Sidebar() {

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [active, setActive] = useState({ "users": true, "products": false });
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/dashboard/users')) {
      setActive({ "users": true, "products": false })
    }

    else if (location.pathname.includes('/dashboard/products')) {
      setActive({ "users": false, "products": true })
    }
  }, [location.pathname])

  function handleUserBtn() {
    navigate('/dashboard/users/')
  }

  function handleProductsBtn() {
    navigate('/dashboard/products/')
  }

  function handleLogout() {
    auth.setLoggedIn(false)
  }

  return (
    <div className="w-1/4 bg-white">

      <div className="side-top flex flex-col items-center pt-15 space-y-5 h-1/2">

        <div className='flex items-center space-x-1.5 py-2 px-3  w-11/12'>
          <img src={dashboard} alt="dashboard logo" className='h-10' />
          <p className='font-semibold text-[#757575] text-base'>Dashboard</p>
        </div>

        <button style={active.users ? { background: "#5A32E9" } : {}} onClick={handleUserBtn} className='flex justify-between items-center p-3  w-11/12 rounded-lg cursor-pointer hover:bg-[#DEE4E7]'>
          <div className="user flex items-center space-x-2">
            <FaUser size={'2rem'} color={active.users ? 'white' : '#757575'} />
            <p style={active.users ? { color: 'white' } : {}} className='font-semibold text-[#757575] text-base'>Users</p>
          </div>
          <FaCaretRight size={'2rem'} color={active.users ? 'white' : '#757575'} />
        </button>

        <button style={active.products ? { background: "#5A32E9" } : {}} onClick={handleProductsBtn} className='flex justify-between items-center p-3 w-11/12 rounded-lg cursor-pointer hover:bg-[#DEE4E7]'>
          <div className="product flex items-center space-x-2">
            <IoCubeOutline size={'2rem'} color={active.products ? 'white' : '#757575'} />
            <p style={active.products ? { color: 'white' } : {}} className='font-semibold text-[#757575] text-base'>Products</p>
          </div>
          <FaCaretRight size={'2rem'} color={active.products ? 'white' : '#757575'} />
        </button>
      </div>

      <div className="side-bottom h-1/2 py-20 flex flex-col items-center justify-end">
        <button onClick={handleLogout} className='w-11/12 flex items-center py-2 px-3 space-x-1.5 rounded-lg cursor-pointer hover:bg-[#DEE4E7]'>
          <LuLogOut size={"2.5rem"} color='#757575' />
          <p className='font-semibold text-[#757575] text-base'>Log out</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar