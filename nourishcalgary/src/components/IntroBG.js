import { ReactComponent as BGRectangle } from "../images/RectangleBG1.svg"
import { ReactComponent as BlueCircle } from "../images/BlueCircle.svg"
import { ReactComponent as CalgaryTower } from "../images/CalgaryTower2.svg"
import Meat1 from "../images/Meat_1.png"
import NourishCalgaryLogo from "../images/NourishCalgaryLogo.png"
import Ellipse5 from "../images/Ellipse 5.png"
import Ellipse4 from "../images/Ellipse 4.png"
import Cookies from "../images/Cookies.png"
import Sushi from "../images/Sushi.png"
import Taco from "../images/Taco.png"
import Ellipse3 from "../images/Ellipse 3 (2).png"
import Subtract1 from "../images/Subtract1.png"
import Subtract2 from "../images/Subtract2.png"
import Carrots from "../images/Carrots.png"

export default function IntroBG() {
    return (
        <div>
            <div className="absolute -right-16 -top-8 z-10">
                <CalgaryTower />
            </div>
            <div className="absolute top-0 -right-2">
                <BGRectangle />
            </div>
            <div className="absolute top-0 left-0">
                <BlueCircle />
                <div className="absolute top-2 left-56">
                    <img src={Ellipse4} alt="Ellipse4" />
                    <div className="relative -top-24 left-4">
                        <img src={Meat1} alt="Cookies" />
                    </div>
                </div>
                <div className="absolute -bottom-[90px] -rotate-[58deg] right-[580px]">
                    <img src={Subtract1} alt="Subtract1" />
                </div>
                <div className="absolute -bottom-40 top-[515px] rotate-35 right-[519px]">
                    <img src={Subtract2} alt="Subtract2" />
                </div>
                <div className="absolute top-16 right-1/4">
                    <img src={Ellipse5} alt="Ellipse5" />
                    <div className="absolute top-8 left-9">
                        <img src={Taco} alt="Taco" />
                    </div>
                </div>
                <div className="absolute left-60 top-40">
                    <img src={Ellipse3} alt="Ellipse3" />
                    <div className="absolute top-3 left-4">
                        <img src={Cookies} alt="Cookies" />
                    </div>
                </div>
                <div className="absolute top-[490px] right-[500px]">
                        <img src={Carrots} alt="Carrots" />
                    </div>
                <div className="flex ml-40 h-80 w-screen">
                    <img src={NourishCalgaryLogo} alt="Nourish Calgary Logo" />
                </div>
                <h1 className="ml-48 text-NourishBlue text-2xl">
                    Let's challenge food insecurity in our city together.
                </h1>
                <div className="absolute left-0 top-0">
                    <img src={Sushi} alt="Sushi" />
                </div>
            </div>
        </div>
    )
}