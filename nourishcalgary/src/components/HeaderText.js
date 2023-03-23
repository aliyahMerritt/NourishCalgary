import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { Nav, NavLogo, NavProfile } from "../NavBarStyle";
import NCLogo from "../images/NourishCalgaryLogo.png";
import { ReactComponent as UserIcon } from "../images/UserIcon.svg"


const handleClick = (content) => {
    const scrollToId = `${content}`;

    const element = document.getElementById(scrollToId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const HeaderText = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div className="ml-24 mt-4 h-screen w-screen">
            <div className="z-50">
                <NavLogo className={colorChange ? 'visible' : 'invisible'}>
                    <div>
                        <img src={NCLogo} alt="Nourish Calgary Logo" height={400} width={180}></img>
                    </div>
                </NavLogo>
                <NavProfile className={colorChange ? 'visible' : 'invisible'}>
                    <Link to="AboutUs" onClick={handleClick} spy={true} smooth={true} className="transition hover:text-NourishBlue cursor-pointer">
                        <UserIcon />
                    </Link>
                </NavProfile>
                <Nav className={colorChange ? 'navbar colorChange shadow-md ease-in-out duration-300' : 'navbar'}>
                    <Link to="AboutUs" onClick={handleClick} spy={true} smooth={true} className="transition hover:text-NourishBlue cursor-pointer">
                        About Us
                        <hr className="h-0.5 w-[65px] my-0 bg-NourishBlue border-0"></hr>
                    </Link>
                    <Link to="Map" onClick={handleClick} offset={-95} spy={true} smooth={true} className="hover:text-NourishBlue cursor-pointer">
                        View Map
                        <hr className="h-0.5 w-[70px] my-0 bg-NourishBlue border-0"></hr>
                    </Link>
                    <Link to="HowCanIHelp" offset={-400} onClick={handleClick} spy={true} smooth={true} className="hover:text-NourishBlue cursor-pointer">
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
                </Nav>
            </div>
        </div>
    )
}

export default HeaderText;
