import React from 'react';
import '../Styles/Weather.css';
import WeatherContainer from './WeatherContainer';

function WeatherInfo(props) {
    const {temp,desc,city} = props.data;
    return (
        <React.Fragment>
            <h3>{desc}</h3>
            <div className='header-description'>
                <h4>City</h4>
                <p>{city}</p>
            </div>
            <div className='header-description'>
                <h4>Temperature</h4>
                <p>{temp}</p>

            </div>
            

        </React.Fragment>

    );
}

export default WeatherInfo