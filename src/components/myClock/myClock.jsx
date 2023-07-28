import MyButton from "../myButton/myButton";
import "./myClock.css";

const MyClock =(props) =>{

    const handleClick = () =>{

    }

    return(
        <div className="clock-card">
            <div>
                <b>Current Format</b>: 12 Hour or 24 Hour aka PMCT
            </div>
        <div className="clock">
            <span className="clock-text" style={{ fontFamily: "Helvetica" }}>
                12:00 pm
            </span>
        </div>


        <div className="toggleButtonContainer">
            <MyButton onClick={handleClick}>Toggle Format</MyButton>
        </div>
        </div>
    )
}

export default MyClock;