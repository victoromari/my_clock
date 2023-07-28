import "./myWeather.css";

const MyWeather = (props) =>{

    const handleClick = () => {

    }

    return(
        <div className="weather-card center">
            <div className= "place">
                <i>Kenya</i> :
            </div>
        <div className="current-temp center">
            98°
        </div>
        <div className="high-low center">
            H:95° L:72°
        </div>
        <div className="weather center">
            95° | 93° | 90° | 84°
        </div>
        </div>
    )

}

export default MyWeather;