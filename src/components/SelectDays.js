import '../css/SelectDays.css';
import { useState, useEffect } from 'react';
import { BsToggleOff, BsToggleOn} from "react-icons/bs";


const SelectDays = ({onSelectDay,onToggleForecast}) => {

  const daysArray = [1,2,3,4,5];

  const [days,setDays] = useState(daysArray[0]);
  const [showForecast,setShowForecast] = useState(false);

  const getDays = (e) => {

    setDays(e.target.value);

    onSelectDay(e.target.value);

  }

  useEffect(() => {

    onToggleForecast(showForecast)
    
  }, [showForecast]);


  return (
    <div className="select_container">
      <h2>
        Forecast 
        {
          showForecast === false 
          ? <BsToggleOff className="toggle" 
          onClick={()=> {
            setShowForecast(!showForecast)
          }}/> 
          : <BsToggleOn className="toggle" 
            onClick={()=> setShowForecast(!showForecast)}/>
        }
      </h2>
      {
        showForecast ?
        <div className="section_to_toggle">
          <p>Select forecast for the next:</p>
          <select value={days} className="select_days" onChange={getDays}>
          {daysArray.map((day,index) => <option key={index} value={8 * day}>{day} day</option>)}
          </select>
        </div>
        : null
      } 
    </div>
  )
}

export default SelectDays;