import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function HeaderText() {

    const handleClick = (content) => {
        const scrollToId = `${content}`;

        const element = document.getElementById(scrollToId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="ml-24 mt-4 h-screen w-screen no-scrollbar">
            <div className="flex justify-center space-x-24">
                <Link to="AboutUs" onClick={handleClick} spy={true} smooth={true} className="transition hover:text-NourishBlue cursor-pointer">
                    About Us
                    <hr className="h-0.5 w-[65px] my-0 bg-NourishBlue border-0"></hr>
                </Link>
                <Link to="Map" onClick={handleClick} offset={-95} spy={true} smooth={true} className="hover:text-NourishBlue cursor-pointer">
                    View Map
                    <hr className="h-0.5 w-[70px] my-0 bg-NourishBlue border-0"></hr>
                </Link>
                <Link  onClick={handleClick} spy={true} smooth={true} className="hover:text-NourishBlue cursor-pointer">
                    How Can I Help?
                    <hr className="h-0.5 w-30 my-0 bg-NourishBlue border-0"></hr>
                </Link>
                <Link onClick={handleClick} spy={true} smooth={true} className="hover:text-NourishBlue cursor-pointer" >
                    Create an Account
                    <hr className="h-0.5 w-30 my-0 bg-NourishBlue border-0"></hr>
                </Link>
                <Link onClick={handleClick} spy={true} smooth={true} className="hover:text-NourishBlue cursor-pointer">
                    Log in
                    <hr className="h-0.5 w-11 my-0 bg-NourishBlue border-0"></hr>
                </Link>
            </div>
        </div>
    )
}