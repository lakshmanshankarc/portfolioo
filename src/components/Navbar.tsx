import React, { useEffect, useState } from 'react'
import MenuIcon from './Menuicon';
export default function Navbar() {
    const [state, setState] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [theme, setTheme] = useState(false);
    const setVis = (e: any) => {
        setState(!state)
        setToggle(!toggle)
    }

    useEffect(() => {
        // if window is resized to desktop size, hide the menu
        if (window.innerWidth > 768) {
            console.log('desktop')
        }
        else {
            const dom = document.getElementById('nav-bar')
            if (toggle) {
                dom?.classList.remove('slidein')
                dom?.classList.add('slideout')
            } else {
                dom?.classList.remove('slideout')
                dom?.classList.add('slidein')
            }
        }
    }, [toggle])

    return (
        <nav className={`w-full blurrish z-50 py-1 lg:py-2 flex justify-between sm:rounded-lg lg:rounded-lg sm:py-0 lg:bg-transparent lg:w-full lg:shadow-sm fixed -mt-14   `}>
            <span className=' w-max px-2 py-2 text2 lg:text-xl lg:px-5'>Portfolio</span>
            <ul className='flex-col justify-evenly  py-48 makecenter m-0 items-center slidein h-screen mt-10 p-0 sm:mt-0 sm:w-full sm:h-max sm:items-start sm:py-2 sm:flex-row sm:flex sm:px-8 sm:justify-between  md:px-16 md:justify-around lg:justify-evenly lg:w-2/3 w-full sm:bg-transparent lg:bg-transparent bg-orange-100 zi99' id='nav-bar'
                onClick={setVis}
            >
                <li><a href="#home" className={` p-1 sm:bg1 slowscale font-rale font-extrabold text-xl lg:bg-transparent`}>Home</a></li>
                <li><a href="#about" className={` p-1 sm:bg1 slowscale font-rale font-extrabold text-xl lg:bg-transparent`}>About</a></li>
                <li><a href="#projects" className={` p-1 sm:bg1 slowscale font-rale font-extrabold text-xl lg:bg-transparent`}>Projects</a></li>
                <li><a href="#contacts" className={` p-1 sm:bg1 slowscale font-rale font-extrabold text-xl lg:bg-transparent`}>Contacts</a></li>
            </ul>
            <div className="w-max px-2 flex ">
                <button onClick={setVis} className={`sm:hidden`}>
                    <MenuIcon props={state} />
                </button>
            </div>
        </nav>
    )
}