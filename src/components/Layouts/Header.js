import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.png";
import { LoggedIn } from "../Other/LoggedIn";
import { Loggedout } from "../Other/Loggedout";
import { useCart } from "../../context";

export const Header = () => {
  const buttons = "text-gray-800 dark:text-white px-2 py-1 mr-2 max-sm:mb-2"

  const {cartList} = useCart();

  const [searchValue, setSearchValue] = useState("");

  const [dropDown, setDropDown] = useState(false);

  const [hidden, setHidden] = useState(true);

  const token = JSON.parse(sessionStorage.getItem("token"));
  const name = JSON.parse(sessionStorage.getItem("name"));


  const toggleSearch = () => {
    setHidden(!hidden)
  };

  const toggleDropdown = () => {
    setDropDown(!dropDown)
  };

  const handleReset = () => {
    setSearchValue("");
  };

  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue !== "") {
      navigate(`/products?q=${searchRef.current.value}`)
    }
    handleReset("");
  };

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode))
    
        if (darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, 
      [darkMode])

  return (
    <div>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-0 py-2 relative">

              <Link to="/" className="flex items-center ml-2.5 mb-4 sm:mb-1">
                  <img src={Logo} className="h-16 mr-2" alt="CourseCloud Logo" />
                  <span className="self-center text-3xl text-logo pt-4 font-semibold whitespace-nowrap dark:text-white">CourseCloud</span>
              </Link>

              <div className="flex flex-wrap items-center ml-2.5 mb-2 sm:mb-0">

                  {/* Dark Mode Switch */}
                  <button onClick={() => setDarkMode(!darkMode)} className={`${buttons}`} id="darkModeSwitch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-nintendo-switch" viewBox="0 0 16 16">
                      <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.136 4.136 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979Zm4.675.269a1.621 1.621 0 0 0-1.113-1.034 1.609 1.609 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.632 1.632 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053ZM3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256Z"/>
                      <path d="M3.425.053a4.136 4.136 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.845 2.845 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"/>
                    </svg>
                  </button>

                  {/* Search */}
                  <button onClick={toggleSearch} className={`${buttons} ${hidden ? "" : "hidden"}`} id="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>

                  {/* Cart */}
                  <Link to="/cart">
                    <button className={`relative flex gap-4 ${buttons}`} id="cart">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                      <span className="absolute bottom-0 right-0 border rounded-full px-1 text-sm text-white bg-red-600" id="count">
                          {cartList.length}
                      </span>
                    </button>
                  </Link>

                  {/* Avatar */}
                  <button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-800 dark:text-white px-2 py-1 mr-2 max-sm:mb-2 inline-flex items-center" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                  </button>

                  {/* <!-- Dropdown menu --> */}
                    {token ? <LoggedIn dropDown={dropDown} toggleDropdown={toggleDropdown}/> : <Loggedout dropDown={dropDown} toggleDropdown={toggleDropdown} name={name}/>}

                  {/* Search Menu */}
                  <div className={`relative mt-1 mr-2 ${hidden ? "hidden" : ""}`}>
                    <form onClick={handleSubmit}>
                      <div className="flex flex-row justify-start gap-2 items-center">

                        <div className="relative w-full mt-1">
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                          </div>
                            <input ref={searchRef} onChange={(e) => setSearchValue(e.target.value)} type="text" id="search-navbar" name="search" className="block w-full max-sm:pl-10 max-sm:text-sm p-2 pl-10 pr-20 text-base text-gray-800 border border-gray-800 rounded-lg bg-gray-50 focus:ring-logo focus:border-logo dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-logo dark:focus:border-logo" placeholder="Search..." autoComplete="off" required="" value={searchValue}/>
                        </div>

                        <button type="submit" onClick={toggleSearch} className={`text-white bg-logo dark:text-white max-sm:px-1.5 max-sm:py-2 max-sm:mt-2 px-2.5 py-3 mt-1 mr-2 border border-gray-800 rounded-md ${hidden ? "hidden" : ""}`} id="search">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                          </svg>
                        </button>

                      </div>
                    </form>
                  </div>

              </div>
          </div>
      </nav>
    </div>
  )
}
