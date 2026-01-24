import MainLogo from '../assets/MainLogo.svg'

function Navbar() {
  return (
    <nav className="h-20 flex">

      <div className="left w-1/4 h-full flex items-center space-x-2 px-7 bg-white">
        <img src={MainLogo} alt="Dashboard Logo" className='h-10' />
        <p className='font-extrabold text-xl'>Admin Dashboard</p>
      </div>

      <div className="right w-3/4 flex items-center justify-center">
        <div className="container w-11/12 flex justify-between items-center">
          <p className='greet text-xl font-medium'>Hello, Admin 👋🏽</p>
          <div className="theme-btn text-base font-medium">Light Mode</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 