import './App.css';
import MyClock from './components/myClock/myClock';
import MyWeather from './components/myWeather/myWeather';

const App = () => {


  return (
    <div className="App">

      <MyClock />
      <MyWeather />
    </div>
  );
}

export default App;
