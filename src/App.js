import './css/App.css'; 
import {useState,useEffect} from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState('');
  const [forecast, setForecast] = useState('');
  const [city, setCity] = useState('Naples');
  const [days, setDays] = useState(8);

  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
  const apyKey = '299a77a4bafdd679a8f084195c801edc';

 useEffect(() => {

  axios
  .get(`${baseUrl}q=${city}&units=metric&appid=${apyKey}`)
  .then( response => {

    setWeather(response.data);

  })

  axios
  .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=299a77a4bafdd679a8f084195c801edc&cnt=${days}`)
  .then( response => {

    console.log(response.data);
    setForecast(response.data);

  })

 }, [city,days]);

 const searchByCity = (search) => {
  search === '' ? setCity('Naples') : setCity(search);
 }

 const getDays = (day) => {
  setDays(day);
 }

  if (!weather || !forecast) return null; 

  return (
    <div className="App">
     
      
      <Header onSearch={searchByCity} />
      <Main weather={weather} forecast={forecast} onSelectDay={getDays}/>
    </div>
  )

}

export default App;
