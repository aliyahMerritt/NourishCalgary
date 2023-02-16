import { ReactComponent as FooterLine } from "../images/FooterLine.svg"

export default function Footer() {
    return (
        <div className="-bottom-[4800px] z-10 absolute h-80 w-screen bg-FooterColour">
            <div className="absolute bottom-[50px] left-8">
                <FooterLine />
            </div>
        </div>
    )
}