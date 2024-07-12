import React from "react";

function Hourly(){
    const [horlyData,setHourlyData] = React.useState({});
    
    return(
        <div className="hourly">
                        <div className="hr">
                            <p className="small-text">1315</p>
                            <img className="small-icon" src="icons/09d@2x.png" alt="icon" />
                            <p className="small-text">30°C</p>
                        </div>
                        <div className="hr">
                            <p className="small-text">1315</p>
                            <img className="small-icon" src="icons/09d@2x.png" alt="icon" />
                            <p className="small-text">30°C</p>
                        </div>
                        <div className="hr">
                            <p className="small-text">1315</p>
                            <img className="small-icon" src="icons/09d@2x.png" alt="icon" />
                            <p className="small-text">30°C</p>
                        </div>
                        <div className="hr">
                            <p className="small-text">1315</p>
                            <img className="small-icon" src="icons/09d@2x.png" alt="icon" />
                            <p className="small-text">30°C</p>
                        </div>
                        <div className="hr">
                            <p className="small-text">1315</p>
                            <img className="small-icon" src="icons/09d@2x.png" alt="icon" />
                            <p className="small-text">30°C</p>
                        </div>
        </div>
                    
    )
}

export default Hourly;