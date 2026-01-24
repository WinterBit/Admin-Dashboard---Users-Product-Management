import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const AppLayout = () => {
    return (
        <div className="w-screen h-screen bg-[#DEE4E7]">
            <Navbar />

            <div className="h-[90%] flex">

                <Sidebar />
                <main>
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default AppLayout