import { Link } from "react-scroll"
import HeaderText from "../components/HeaderText"
import IntroBG from "../components/IntroBG"

export default function HomePage() {
    return (
        <>
            <div className="bg-NourishBG h-[3000px] w-screen overflow-x-hidden scrollbar-hide">
                <IntroBG />
                <div className="z-40 absolute overflow-x-hidden scrollbar-hide">
                    <HeaderText />
                </div>
            </div>
        </>
    )
}