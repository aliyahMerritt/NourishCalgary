import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import NCLogo from "../images/NourishCalgaryLogo.png";
import { ReactComponent as UserFill } from "../images/UserFill.svg"
import HCIHStyling from "./HowCanIHelpStyling";

export default function HowCanIHelp() {

    const handleClick = (content) => {
        const scrollToId = `${content}`;

        const element = document.getElementById(scrollToId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="top-[3200px] absolute w-[4000px] h-[3000px] absolute bg-gradient-to-b from-NourishBlue to-NourishBG z-10">
            <div className="top-[3000px] absolute w-screen h-[3000px] bg-NourishBG">
                <div className="ml-24 mt-4 h-screen w-screen">
                    <Link to="Introduction" className="absolute -top-[470px] left-12 cursor-pointer" onClick={handleClick} spy={true} smooth={true}>
                        <img src={NCLogo} alt="Nourish Calgary Logo" height={400} width={180} />
                    </Link>
                    <Link to="Introduction" className="absolute -top-[470px] right-12 cursor-pointer" onClick={handleClick} spy={true} smooth={true}>
                        <UserFill />
                    </Link>
                    <div className="absolute ml-[350px] flex justify-center space-x-24 -top-[450px] text-xl" id="HowCanIHelp">
                        <Link to="Introduction" onClick={handleClick} spy={true} smooth={true} className="transition hover:text-NourishBlue cursor-pointer">
                            Home
                            <hr className="h-0.5 w-[53px] my-0 bg-NourishBlue border-0"></hr>
                        </Link>
                        <Link to="AboutUs" onClick={handleClick} spy={true} smooth={true} className="transition hover:text-NourishBlue cursor-pointer">
                            About Us
                            <hr className="h-0.5 w-[83px] my-0 bg-NourishBlue border-0"></hr>
                        </Link>
                        <Link to="Map" onClick={handleClick} offset={-95} spy={true} smooth={true} className="hover:text-NourishBlue cursor-pointer">
                            View Map
                            <hr className="h-0.5 w-[87px] my-0 bg-NourishBlue border-0"></hr>
                        </Link>
                        <Link onClick={handleClick} spy={true} smooth={true} className="hover:text-NourishBlue cursor-pointer">
                            Sign Out
                            <hr className="h-0.5 w-30 my-0 bg-NourishBlue border-0"></hr>
                        </Link>
                    </div>
                    <div className="absolute text-NourishBlue text-6xl left-[480px] font-bold -top-[400px]">
                        How can You Help?
                    </div>
                </div>
                <HCIHStyling />
            </div>
        </div>
    )
}