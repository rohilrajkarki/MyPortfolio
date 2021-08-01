import "./works.scss"
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons"

import {
    featuredPortfolio,

} from '../../data'

import { useState } from "react";


export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : featuredPortfolio.length - 1)
            : setCurrentSlide(currentSlide < featuredPortfolio.length - 1 ? currentSlide + 1 : 0)

    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {featuredPortfolio.map((d) => (<div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.img} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>

                            </div>
                        </div>
                        <div className="right">
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <ArrowBackIos className="arrow left" onClick={() => handleClick("left")} />
            <ArrowForwardIos className="arrow right" onClick={() => handleClick("")} />



        </div>
    )
}
