import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout