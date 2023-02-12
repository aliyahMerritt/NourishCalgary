import { Link } from "react-scroll"

export default function HeaderText() {
    return(
        <div className="ml-24 mt-4 h-screen w-screen no-scrollbar">
            <div className="flex justify-center space-x-24">
                <Link className="transition hover:text-NourishBlue cursor-pointer" to="/">
                    About Us
                    <hr className="h-0.5 w-16 my-0 bg-NourishBlue border-0"></hr>
                </Link>
                <Link className="hover:text-NourishBlue cursor-pointer" to="/">
                    View Map
                    <hr className="h-0.5 w-16 my-0 bg-NourishBlue border-0"></hr>
                </Link>
                <Link className="hover:text-NourishBlue cursor-pointer" to="/">
                    How Can I Help?
                    <hr className="h-0.5 w-30 my-0 bg-NourishBlue border-0"></hr>
                </Link>
                <Link className="hover:text-NourishBlue cursor-pointer" to="/">
                    Create an Account
                    <hr className="h-0.5 w-30 my-0 bg-NourishBlue border-0"></hr>
                </Link>
                <Link className="hover:text-NourishBlue cursor-pointer" to="/">
                    Log in
                    <hr className="h-0.5 w-11 my-0 bg-NourishBlue border-0"></hr>
                </Link>
            </div>
        </div>
    )
}