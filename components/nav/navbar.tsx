
import {PiBooksDuotone} from "react-icons/pi"
import {BsPersonCircle, BsSearch} from "react-icons/bs"
import {FiMenu} from "react-icons/fi"
import { toggleMenu } from "./logic"
import MobileNavbar from "./mobileNavbar"

export default function Navbar() {
    
  return (
    <nav className="flex justify-between w-screen py-3 md:px-10 px-5 bg-[#ef5d58]">
        {/* Icons */}
        <div className="flex gap-4 items-center">
            {/* <img src="" alt="Logo" /> */}
            <PiBooksDuotone className="text-4xl md:text-5xl" color="#ffffff"/>
            <h1 className="md:text-2xl text-xl text-white">Book Catalog</h1>
        </div>

        <div className="hidden md:relative h-1/2 mt-3">
            <input type="text" className="block w-full h-full rounded-md border-gray-300 p-2" placeholder="Search" />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <BsSearch size={20}/>
            </div>
            
        </div>

        <div className="md:hidden flex items-center ml-2">
            <button className="border border-gray-300 rounded-md p-2.5 hover:bg-gray-500" onClick={toggleMenu}>
                <FiMenu className="text-2xl text-white"/>
            </button>
            
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center" id="links">
            <ul className="flex justify-evenly gap-4 text-white">
                <li className="hover:text-gray-300">
                    <a href="">Link 1</a>
                </li>
                <li className="hover:text-gray-300">
                    <a href="">Link 2</a>
                </li>
            </ul>
            

            {/* Auth */}
            <div className="ml-10">
                <BsPersonCircle size={30} color="#ffffff"/>
            </div>
        </div>
        
        {/* Mobile Menu */}
        <MobileNavbar className="hidden animate-slide_left" id="mobile-menu" />
        
    </nav>
  )
}
