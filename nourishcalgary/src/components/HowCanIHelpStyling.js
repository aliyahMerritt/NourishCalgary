import React from "react"
import { ReactComponent as VLine } from "../images/VerticalLine.svg"
import BlueOval1 from "../images/Col-1-LB.png"
import GreyOval1 from "../images/Col-1-G.png"
import DarkBlueOval1 from "../images/Col-1-DB.png"
import BlueOval2 from "../images/Col-2-LB.png"
import GreyOval2 from "../images/Col-2-G.png"
import DarkBlueOval2 from "../images/Col-2-DB.png"
import BlueOval3 from "../images/Col-3-LB.png"
import GreyOval3 from "../images/Col-3-G.png"
import DarkBlueOval3 from "../images/Col-3-DB.png"

export default function HCIHStyling() {
    return (
        <div>
            <div className="absolute -top-[250px] left-8 w-[400px] text-center text-wrap text-3xl text-DarkNourishBlue font-bold">
                Have any uneaten non-perishables at home?
            </div>
            <div className="absolute -top-[250px] left-[550px] w-[400px] text-center text-wrap text-3xl text-DarkNourishBlue font-bold">
                Volunteer in your community
            </div>
            <div className="absolute -top-[250px] left-[1060px] w-[400px] text-center text-wrap text-3xl text-DarkNourishBlue font-bold">
                Start your own initiative
            </div>
            <div>
                <img src={BlueOval1} alt="Oval 1" className="left-0 absolute -top-[150px]" />
                <div className="left-[25px] absolute -top-[108px] text-3xl w-72 text-wrap">
                    Consider donating them to a local community pantry.
                    This is a great way to fill stomachs and reduce food waste.
                </div>
                <div className="left-[210px] z-10 absolute top-[180px] text-3xl w-[250px] text-wrap text-center">
                    Set up your own community pantry or donate the food items to the food bank.
                </div>
                <div className="left-[25px] z-10 absolute top-[440px] text-3xl w-72 text-wrap">
                    Non-perishable food items are the best food items to donate, since they have a longer shelf life.
                </div>
                <img src={GreyOval1} alt="GreyOval1" className="left-[124px] absolute top-[60px]" />
                <img src={DarkBlueOval1} alt="DarkBlueOval1" className="left-0 top-[370px] absolute" />
            </div>
            <div className="left-[715px] z-10 absolute -top-[112px] text-3xl w-60 text-wrap text-center">
                Helping out at local shelters can help reduce food insecurity in your community
            </div>
            <div className="left-[500px] z-10 absolute top-[110px] text-3xl w-[250px] text-wrap text-center">
                Distributing food or committing to food drives can make things easier for local non-profits
            </div>
            <div className="left-[620px] z-20 absolute top-[365px] text-3xl w-96 text-wrap text-center">
                Talking to people about how to solve food insecurity can create new solutions and encourage people to ask for the help they need
            </div>
            <div>
                <img src={BlueOval2} alt="Oval 2" className="right-[473px] absolute top-[320px] z-10" />
                <img src={GreyOval2} alt="GreyOval2" className="right-[702px] absolute top-[60px]" />
                <img src={DarkBlueOval2} alt="DarkBlueOval2" className="right-[480px] -top-[160px] absolute" />
            </div>
            <div className="left-[1115px] z-10 absolute -top-[112px] text-3xl w-72 text-wrap text-center">
                Try creating a community pantry in your community if there isn’t one already!
            </div>
            <div className="left-[1160px] z-20 absolute top-[150px] text-3xl w-[300px] text-wrap text-center">
                Distributing food or committing to food drives can make things easier for local non-profits
            </div>
            <div className="left-[1030px] z-20 absolute top-[395px] text-3xl w-60 text-wrap text-center">
                Start to raise awareness in any way you can!
            </div>
            <div>
                <img src={BlueOval3} alt="BlueOval3" className="right-[155px] absolute top-[348px] z-10" />
                <img src={GreyOval3} alt="GreyOval3" className="right-0 absolute -top-[165px]" />
                <img src={DarkBlueOval3} alt="DarkBlueOval3" className="right-0 top-[100px] absolute" />
            </div>
            <div className="absolute left-[470px] z-20 -top-40">
                <VLine />
            </div>
            <div className="absolute right-[470px] z-20 -top-40">
                <VLine />
            </div>
        </div>
    )
}