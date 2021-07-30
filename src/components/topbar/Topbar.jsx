import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        //+ if menuOpen(true huda) then add "active"
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+977 9840462308 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>rohilrajkarki@gmail.com </span>
                    </div>


                </div>

                <div className="right">
                    {/* Onclick can setMenuOpen function and do opposite of menuOpne */}
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
