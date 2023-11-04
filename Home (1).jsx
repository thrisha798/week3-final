import React from "react";
import video from "./assets/journal.mp4"


import "./Home.css";
const Home = () => { 
    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="journal.mp4"></video>
            <div className="textDiv">
            <h3 className="hometitle">
                ScribbleSymphony
                </h3>
                <span className="smallText">
                Compose your thoughts, one note at a time, with ScribbleSymphony – where your ideas create the perfect harmony on the pages of your digital journal.
                </span>
            </div>
        </section>

    )
}
export default Home;