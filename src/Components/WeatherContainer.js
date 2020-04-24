import React, {useState} from 'react';
import '../Styles/Weather.css';

function WeatherContainer(){
    const [searchQuery, setSearchQuery] = useState ('');
    const [weatherData, setWeatherData] = useState ({
        temp: null,
        humidity: null,
        desc: null,
        city: null,
    })

    function updateSearchQuery(event) {
        setSearchQuery(event.target.value);

        // function validateZipCode(zipCode){
        //     let regex = /[0-9]{5}/;
        //     return redex.test(zipCode)
        // }

    }
    return(
        <section className="weather-container">
            <header className=" weather-header">
                <h3> Simple Weather App</h3>
                <div className="placeholder-input">
                    <input 
                        placeholder="Enter Zip Code Here"
                        className= "search-input"
                        onChange={updateSearchQuery}
                        maxLength='5'
                    />
                     <button className="material-icons">search</button>
                 </div>
             </header> 
             <section className='weather-info'>
                 {weatherData.temp === null ? (
                     <p>No Weather to Display<i
                     className='material-icons'>wb_sunny</i></p>
                 ) : ''
                 }
                 
                 </section>   

        </section>
    )
}

export default WeatherContainer;