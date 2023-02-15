import NCLogo from "../images/NourishCalgaryLogo.png";
import React from "react";

export default function Map() {
    return (
        <div className="absolute top-[2400px]">
            <h1 className="absolute text-white text-5xl left-8 -top-[100px] font-bold">
                Nourish Calgary Map
            </h1>
            <h1 className="absolute text-white text-4xl left-[530px] -top-[92px]">
                - Find your nearest pantry
            </h1>
            <div className="w-[1100px] h-[800px]">
                
            </div>
            {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1MzdOiEEK_AG4FOF5x_m02EIv_IEP3fhf&hl=en_US&ll=50.99966495975454%2C-113.9977771964429&z=11" width={1100} height={800}></iframe> */}
            <div className="-top-[100px] absolute w-screen h-[5100px] absolute bg-NourishBlue -z-10">

            </div>
            <div className="bg-NourishBG w-[1100px] h-16 left-0 absolute top-0 z-50">
                <img src={NCLogo} alt="Nourish Calgary Logo" height={400} width={180}></img>
                <div className="bg-DarkNourishBlue w-[910px] h-16 left-[190px] absolute top-0">

                </div>
            </div>
        </div>
    )
}