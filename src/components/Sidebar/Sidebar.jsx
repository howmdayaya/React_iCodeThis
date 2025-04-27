import { NavLink } from "react-router-dom";
import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <aside className="w-64 border rounded-2xl shadow-2xl flex flex-col items-center py-5 gap-5">
            <h2 className="w-full flex flex-col  items-center text-center link">
                <NavLink to="/" className="text-2xl w-full">Home</NavLink>
            </h2>
            <nav className="flex flex-col w-full link gap-2">
                <NavLink to="/demo01" >404 Error Page</NavLink>
                <NavLink to="/demo02" >Subscribe</NavLink>
                <NavLink to="/demo03" >Mobile Menu</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar;