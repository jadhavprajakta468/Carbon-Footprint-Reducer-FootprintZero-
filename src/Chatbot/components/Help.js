import React from "react";

export default function Help(props){

    const cfc = () => {
        props.actions.cfc();
    }

    const campaigns = () => {
        props.actions.campaigns();
    }

    const tips = () => {
        props.actions.tips();
    }

    const perRecom = () => {
        props.actions.perRecom();
    }

    return (
        <div>
            <button className='start-btn' onClick={() => cfc()}>How is Carbon Footprint Calculated</button><br/><br/>
            <button className='start-btn' onClick={() => campaigns()}>Our Campaigns</button><br/><br/>
            <button className='start-btn' onClick={() => tips()}>Sustainability Tips</button><br/><br/>
            <button className='start-btn' onClick={() => perRecom()}>Personalized Recommendations</button><br/>
        </div>
    )
}