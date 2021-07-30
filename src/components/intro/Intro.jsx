import "./intro.scss"
import { KeyboardArrowDown } from "@material-ui/icons"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'



export default function Intro() {
    const textRef = useRef();


    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backspeed: 60,
            showCursor: true,

            strings: ["Web Developer", "Designer", "Mobile Developer"],
        });

    }, [])//dependencies ma emty array 


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/photo.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Rohil Raj Karki</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown className="icon" />
                </a>


            </div>

        </div>
    )
}
