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
            <div className="absolute top-[92px] -left-4 z-30 w-screen">
                <h1 className="absolute text-white text-5xl left-8 -top-[100px] font-bold">
                    Nourish Calgary Map
                </h1>
                <h1 className="absolute text-white text-4xl left-[530px] -top-[92px]">
                    - Find your nearest pantry
                </h1>
            </div>
            <div className="w-[1100px] h-[800px]">

            </div>
            <div className="-top-[100px] absolute w-screen h-[2000px] absolute bg-NourishBlue -z-10">

            </div>
            <div className="bg-DarkNourishBlue w-[1107px] h-20 left-0 absolute -top-[20px] z-20">
                <Link to="Introduction" onClick={handleClick} spy={true} smooth={true} className="cursor-pointer">

                </Link>
            </div>
        </div>
    )
}