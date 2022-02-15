import React from 'react';
import './Hemisphere.css';
import northernHemisphere from './img/NorthernHemisphere.jpg';
import southerHemisphere from './img/SouthernHemisphere.jpg';


const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        picture: northernHemisphere
    },
    Southern: {
        text: 'it is southern hemisphere',
        picture: southerHemisphere
    }
}

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere]
    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt="hemisphere" />
                </div>
                <div className='ui teal bottom attached label'>
                    {text}
                </div>
            </div>
        </div>
    )
}
export default HemisphereDisplay;