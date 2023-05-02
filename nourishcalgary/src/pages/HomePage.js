import HeaderText from "../components/HeaderText"
import IntroBG from "../components/IntroBG"

export default function HomePage() {

    //const [scrollbarVisibility, setScrollbarVisibility] = useState(false);
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 80) {
    //         setColorchange(true);
    //     }
    //     else {
    //         setColorchange(false);
    //     }
    // };
    // window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <div className="bg-NourishBG h-[3000px] w-screen overflow-x-hidden scrollbar-hide top-[1000px]">
                <IntroBG />
                <div className="z-40 absolute overflow-x-hidden scrollbar-hide">
                    <HeaderText />
                </div>
            </div>
        </>
    )
}