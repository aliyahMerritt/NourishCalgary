import BownessLogo from "../images/BHSLogo.png"
import { ReactComponent as Line } from "../images/Line2.svg"
import { ReactComponent as Line2 } from "../images/Line2.svg"
import Pantry from "../images/Pantry.png"
import Coffee from "../images/Coffee.png"
import Burrito from "../images/Burrito.png"

export default function AboutPage() {
    return (
        <div>
            <div className="absolute text-NourishBlue top-[1150px] text-7xl z-10 font-bold left-28" id="AboutUs">
                About Us
            </div>
            <div className="absolute text-NourishBlue top-[1270px] text-3xl left-28 text-wrap w-72">
                Proudly brought to you by the 2023 graduating class of Bowness High School.
            </div>
            <div className="absolute top-[1510px] left-28">
                <img src={BownessLogo} alt="Bowness High School Logo" />
            </div>
            <div className="absolute top-[1160px] left-[60px] -rotate-[20deg]">
                <Line />
            </div>
            <div className="absolute top-[660px] -right-[630px] rotate-[50deg]">
                <Line2 />
            </div>
            <div className="absolute right-8 top-[1160px]">
                <img src={Pantry} alt="Pantry Placeholder" />
                <p className="absolute text-white text-3xl mt-10 text-center">
                    Nourish Calgary is an app inspired by the graduating class of 2023 at Bowness High school and their Community Pantry legacy project. In the front of Bowness High School is a community pantry - designed and built by graduating 2023 students to combat food insecurity in their community.
                    With this app, Calgarians can view and be taken to community pantry’s and free food, including food bank locations, etc. to help people stay nourished no matter their circumstances.
                </p>
            </div>
            <div className="absolute right-[1010px] top-[1780px] animate-bounce2">
                <img src={Coffee} alt="Coffee" />
            </div>
            <div className="absolute right-[790px] top-[1500px] animate-bounce4">
                <img src={Burrito} alt="Burrito" />
            </div>
        </div>
    )
}