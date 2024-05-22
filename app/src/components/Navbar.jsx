import React from 'react'
import { NavbarLinks } from "../data/navbar_links"
import {Link, useLocation, matchPath} from "react-router-dom"

const Navbar = () => {
    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }
  return (
    <div
      className={`flex h-20 items-center bg-[#112d4e] justify-center font-manrope ${
        location.pathname !== "/" 
      } transition-all duration-200`}
    >
        <nav className="hidden md:block items-center">
          <ul className="flex gap-x-6  font-normal">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                  
              </li>
            ))}
          </ul>
        </nav>
    </div>
  )
}

export default Navbar