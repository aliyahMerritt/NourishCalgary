import NCLogo from "../images/NourishCalgaryLogo.png";
import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as UserIcon } from "../images/UserIcon.svg"
import { ReactComponent as SearchIcon } from "../images/SearchIcon.svg"

export default function Map() {

    const handleClick = (content) => {
        const scrollToId = `${content}`;

        const element = document.getElementById(scrollToId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="absolute top-[2400px]" id="Map">
            <h1 className="absolute text-white text-5xl left-8 -top-[100px] font-bold">
                Nourish Calgary Map
            </h1>
            <h1 className="absolute text-white text-4xl left-[530px] -top-[92px]">
                - Find your nearest pantry
            </h1>
            <div className="w-[1100px] h-[800px]">

            </div>
            <div className="-top-[100px] absolute w-screen h-[2000px] absolute bg-NourishBlue -z-10">

            </div>
            <div className="bg-NourishBG w-[1100px] h-16 left-0 absolute top-0 z-20">
                <Link to="Introduction" onClick={handleClick} spy={true} smooth={true} className="cursor-pointer">
                    <img src={NCLogo} alt="Nourish Calgary Logo" height={400} width={180}></img>
                </Link>
                <div className="bg-DarkNourishBlue w-[910px] h-16 left-[190px] absolute top-0">
                    <div className="text-white text-lg p-4 -bottom-2 right-0 absolute">
                        <Link to="AboutUs" onClick={handleClick} spy={true} smooth={true} className="transition hover:text-NourishBlue cursor-pointer">
                            <UserIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}