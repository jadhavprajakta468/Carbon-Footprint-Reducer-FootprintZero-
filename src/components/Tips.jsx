import React from "react";
import transport from './images/transportation-removebg-preview.png';
import energy from './images/energy-removebg-preview.png';
import keto from './images/ketogenic-diet-food-vector-removebg-preview.png';
import water from './images/water-removebg-preview.png';
import './Tips.css'

const Tips = () => {
    return(
        <div className="tips-body">
            <header className="tip-head">
                <h1>Tips to Reduce Carbon Footprint</h1>
                <p>Practical tips to help reduce your carbon footprint across various topics.</p>
            </header>
    
        <div class="tip-container">
        <div class="tip-box" id="energy">
            <img src={energy} alt="Energy" class="tip-logo"/>
            <h2>Energy Efficiency</h2>
            <ul>
                <li>Use energy-efficient appliances</li>
                <li>Switch to LED light bulbs</li>
                <li>Unplug devices when not in use</li>
                <li>Seal windows and doors to conserve heat</li>
            </ul>
        </div>

        <div class="tip-box" id="transport">
            <img src={transport} alt="Transportation" class="tip-logo"/>
            <h2>Transportation</h2>
            <ul>
                <li>Use public transportation</li>
                <li>Carpool or share rides</li>
                <li>Opt for an electric vehicle</li>
                <li>Walk or cycle for short distances</li>
                <li>Combine errands into one trip to reduce travel</li>
                <li>Maintain your vehicle for better fuel efficiency</li>
                <li>Avoid unnecessary idling of your vehicle</li>
               
            </ul>
        </div>

        <div class="tip-box" id="food">
            <img src={keto} alt="Food and Diet" class="tip-logo"/>
            <h2>Food and Diet</h2>
            <ul>
                <li>Choose plant-based foods</li>
                <li>Buy locally produced food</li>
                <li>Minimize food waste</li>
                <li>Compost organic waste</li>
                <li>Plan meals to avoid over-purchasing</li>
                <li>Preserve excess food by freezing or canning</li>
              
            </ul>
        </div>

            <div class="tip-box" id="water">
                <img src={water} alt="Water Conservation" class="tip-logo"/>
                <h2>Water Conservation</h2>
                <ul>
                    <li>Fix leaks in taps and pipes</li>
                    <li>Take shorter showers</li>
                    <li>Use a water-efficient showerhead</li>
                    <li>Water plants during cooler times of the day</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Tips;