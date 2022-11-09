import React from "react";
import videoBg from '../assets/videos/ocean_water_on_shallow_beach_on_clear_day.mp4';
import './Main.css';


const Main = () => {
    return (
        <div className="main-video">
            <div className="overlay">
                <video src={videoBg} preload="true" autoPlay loop muted />
                <div className="home-content">
                    <h1> Make Better Memories </h1>
                    <p> Book Now </p>
                </div>
            </div>
        </div>

    )
}

export default Main;