import '../css/Main.css'
import Weather from '../components/Weather';

const Main = ({weather,forecast,onSelectDay}) => {
  return (
    <main className="main_container">
      <Weather weather={weather} forecast={forecast} onSelectDay={onSelectDay}/>
    </main>
  )
}

export default Main
