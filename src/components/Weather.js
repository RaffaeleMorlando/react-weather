import '../css/Weather.css'
import {useState} from 'react';
import SelectDays from '../components/SelectDays';
import { GiSunrise, GiSunset} from "react-icons/gi";

const Weather = ({weather,forecast,onSelectDay}) => {

  const sunriseTimestamp = new Date(weather.sys.sunrise * 1000).toLocaleTimeString('it');
  const sunsetTimestamp = new Date(weather.sys.sunset * 1000).toLocaleTimeString('it');

  const [showForecast,setShowForecast] = useState(false);

  const dateForecast = forecast.list.map((test) => {
      return test.dt_txt.split(' ');
  });

  const toggleForecast = (isShow) => {
    console.log(isShow);
    setShowForecast(isShow);
  }

  return (
    <div className="weather_container">
      <div className="weather_title">
        <h1>{weather.name}</h1>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
        <p>{weather.weather[0].description}</p>
      </div>
      <div className="weather_temp">
        <span>
          {`Temp ${Math.round(weather.main.temp)}°C`}
        </span>
        <span>
          {`Max ${Math.round(weather.main.temp_max)}°C`}
        </span>
        <span>
          {`Min ${Math.round(weather.main.temp_min)}°C`}
        </span>
      </div>
      <div className="weather_info">
        <span>
          <GiSunrise className="sun_icon"/>
          {sunriseTimestamp}
        </span>
        <span>
          <GiSunset className="sun_icon"/>
          {sunsetTimestamp}
        </span>
      </div>  
      <SelectDays onSelectDay={onSelectDay} onToggleForecast={toggleForecast}/>
      {
        showForecast === true ? 
        <div className="weather_forecast">
          {
            forecast.list.map((item,index) => {
              return (
                <div key={index} className="forecast">
                  <div className="forecast_date">
                    <span>{new Date(dateForecast[index][0]).toDateString()}</span>
                    <span>{dateForecast[index][1]}</span>
                  </div>
                  <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt=""/>
                  <p className="description">{item.weather[0].description.toUpperCase()}</p>
                </div>
              )
            })
          }
        </div>
        : null
      }
      
    </div>
  )

}

export default Weather;
