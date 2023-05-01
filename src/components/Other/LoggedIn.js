import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services";
import { useCart } from "../../context";

export const LoggedIn = ({dropDown, toggleDropdown, name}) => {

    const {clearCart} = useCart();
    const navigate = useNavigate();

    const handleLogout = function () {
        toggleDropdown();
        clearCart();
        logout();
        navigate("/");
    };

  return (
    <div id="dropdown" className={`z-10 ${dropDown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 border border-gray-200 dark:border-gray-900 dark:bg-gray-800 absolute top-16 right-0`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
                <Link to="/products" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">All Courses</Link>
            </li>
            <li>
                <Link to="/dashboard" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
                <Link to="/" onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Log out</Link>
            </li>
        </ul>
    </div>
  )
}