import { Link } from "react-scroll"
import HeaderText from "../components/HeaderText"
import IntroBG from "../components/IntroBG"

export default function HomePage() {
    return (
        <>
            <div>
                <IntroBG />
                <div className="z-40 absolute">
                    <HeaderText />
                </div>
            </div>
        </>
    )
}