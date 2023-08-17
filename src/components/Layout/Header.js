import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { Search } from '../sectoins/Search';
import { DropdownLoggedIn } from '../';
import { DropdownLoggedOut } from '../';
import { useSession } from '../../context/sessionContext';
import { useCart } from '../../context';

export const Header = () => {

  const [showSearch, setShowSearch] = useState(false)
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')

    }
    else (
      document.documentElement.classList.remove('dark')
    )

    function handleDropClick(e) {
      if (!dropRef.current.contains(e.target)) {
        setShowDropDown(false)
      }
    }

    document.addEventListener('click', handleDropClick, true)

    return () => document.removeEventListener('click', handleDropClick)
  }, [darkMode])

  const [showDropDown, setShowDropDown] = useState(false)
  const dropRef = useRef()
  
  const { isLogged, setIsLogged } = useSession()
  const {cartList} = useCart()
  
  function handleClick() {
    setIsLogged(!!sessionStorage.getItem('cbId'))
    setShowDropDown(!showDropDown)
  }
  return (
    <header >

      <nav className="bg-white-400 border-gray-200 dark:bg-gray-900 max-w-7xl border-b m-auto">

        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

          <Link to="/" className="flex items-center">

            <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ViaroBook</span>

          </Link>

          <div className="flex items-center ">

            {/* setting */}
            <span onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl mr-5 text-gray-700 dark:text-white'>

              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-gear-wide-connected " viewBox="0 0 16 16">
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
              </svg>

            </span>

            {/* search */}
            <span onClick={() => setShowSearch(!showSearch)} className='cursor-pointer text-xl mr-5 text-gray-700 dark:text-white'>

              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
              </svg>

            </span>

            {/* cart for cart & its above state */}
            <Link to='/cart' className='mr-5 text-xl'>

              <span className='cursor-pointer   text-gray-700 dark:text-white relative'>

                <span className="text-white text-xs absolute -top-2 left-2 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-cart-fill text-7xl" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>

              </span>

            </Link>
            {/* profile */}
            <span ref={dropRef} onClick={() => handleClick()} className='relative cursor-pointer text-xl mr-5 text-gray-700 dark:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              {showDropDown && (isLogged ? <DropdownLoggedIn setToggle={setShowDropDown} /> : <DropdownLoggedOut setToggle={setShowDropDown} />)}
            </span>
          </div>
        </div>
      </nav>
      {showSearch && <Search setDisplay={setShowSearch} display={showSearch} />}

    </header>
  );


}
