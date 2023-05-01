import { Link } from "react-router-dom";

export const Loggedout = ({dropDown, toggleDropdown}) => {
  return (
    <div id="dropdown" className={`z-10 ${dropDown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 border border-gray-200 dark:border-gray-900 dark:bg-gray-800 absolute top-16 right-0`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
            <Link to="/products" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">All Courses</Link>
        </li>
        <li>
            <Link to="/login" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Login</Link>
        </li>
        <li>
            <Link to="/register" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Register</Link>
        </li>
        </ul>
    </div>
  )
}
