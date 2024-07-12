import React from "react";
import axios from "axios";
// import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import Error from "./components/Error";

function App() {
  const[location,setLocation] = React.useState("");
  const [currentData,setCurrentData] = React.useState({});
  const [hourlyData,setHourlyData] = React.useState({});
  const [icon,setIcon] = React.useState("");
  const [hI1,setHI1 ] = React.useState("");
  const [hI2,setHI2 ] = React.useState("");
  const [hI3,setHI3 ] = React.useState("");
  const [hI4,setHI4 ] = React.useState("");
  const [hI5,setHI5 ] = React.useState("");
  const [hI6,setHI6 ] = React.useState("");
 
  const[error,setError] = React.useState(false);
  const[errMsg,setErrMsg] = React.useState("");

  const currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=0a605c99e644167a8948173eb448da7f&units=metric";
  const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  // const hourlyIcon = "https://openweathermap.org/img/wn/" + {hourlyData,list ? } + "@2x.png";
  const hourlyUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ location +"&APPID=0a605c99e644167a8948173eb448da7f&units=metric"
  


  function handleChange(event){
    setLocation(event.target.value);
  };
  function handleClick(){
    axios.get(currentUrl).then((response)=>{
      setCurrentData(response.data)
      setIcon(response.data.weather[0].icon)
    },
    (error)=>{
      setCurrentData({})
      setError(true)
      setErrMsg(error.message)
    })

    axios.get(hourlyUrl).then((response)=>{
      setHourlyData(response.data)
      setHI1(response.data.list[1].weather[0].icon)
      setHI2(response.data.list[2].weather[0].icon)
      setHI3(response.data.list[3].weather[0].icon)
      setHI4(response.data.list[4].weather[0].icon)
      setHI5(response.data.list[5].weather[0].icon)
      setHI6(response.data.list[6].weather[0].icon)
    },
    (error)=>{
      setCurrentData({})
      setError(true)
      setErrMsg(error.message)
    })
    setLocation('')
    setError(false)
  }
  

  return (
    <div className="app">
        <div className="search">
            <input onChange={handleChange} type="text" placeholder="Enter City Name" value={location} />
            <button onClick={handleClick}><i className="fa-solid fa-magnifying-glass fa-2xl" style={{color: "#f3f6fb"}}></i></button>
        </div>
        {error ? <Error msg = {errMsg }/> : null}
        
        <div className="container">
            <div className="top">

           
                <div className="location">
                  {currentData.name ? <p> <i className="fa-solid fa-location-dot"></i>{} {currentData.name}</p> : null}
                </div>
                <div className="info">
                    <div className="icon">
                      {currentData.name ?  <img className="big-icon" src={iconUrl} alt="weather-icon" /> : null}
                    </div>
                    <div className="temp">
                        {currentData.main ? <h1>{currentData.main.temp.toFixed()}</h1> : null}
                    </div>
                    <div className="sym">
                      {currentData.name ? <p>°C</p> : null}
                    </div>
                    <div className="description">
                    {currentData.weather ? <p>{currentData.weather[0].main}</p>: null }
                    </div>
                    <div className="date">
                        {currentData.name ? <p className="small-text">{new Date().toString().slice(0,10)}</p> : null}
                    </div>
                  

                    {currentData.name !== undefined &&
                      <div className="hourly">
                        <div className="hr">
                            {hourlyData.list ? <p className="small-text">{hourlyData.list[1].dt_txt.slice(11,16)}</p> : null }
                            <img className="small-icon" src={"https://openweathermap.org/img/wn/" + hI1 + "@2x.png"} alt="icon" />
                            { hourlyData.list ? <p className="small-text">{hourlyData.list[1].main.temp.toFixed()}°C </p> : null}
                        </div>
                        <div className="hr">
                          {hourlyData.list? <p className="small-text">{hourlyData.list[2].dt_txt.slice(11,16)}</p> : null }
                          <img className="small-icon" src={"https://openweathermap.org/img/wn/" + hI2 + "@2x.png"} alt="icon" />
                            { hourlyData.list ? <p className="small-text">{hourlyData.list[2].main.temp.toFixed()}°C </p> : null}
                        </div>
                        <div className="hr">
                          {hourlyData.list? <p className="small-text">{hourlyData.list[3].dt_txt.slice(11,16)}</p> : null }
                          <img className="small-icon" src={"https://openweathermap.org/img/wn/" + hI3 + "@2x.png"} alt="icon" />
                            { hourlyData.list ? <p className="small-text">{hourlyData.list[3].main.temp.toFixed()}°C </p> : null}
                        </div>
                        <div className="hr">
                          {hourlyData.list? <p className="small-text">{hourlyData.list[4].dt_txt.slice(11,16)}</p> : null }
                          <img className="small-icon" src={"https://openweathermap.org/img/wn/" + hI4 + "@2x.png"} alt="icon" />
                            { hourlyData.list ? <p className="small-text">{hourlyData.list[4].main.temp.toFixed()}°C </p> : null}
                        </div>
                        <div className="hr">
                          {hourlyData.list? <p className="small-text">{hourlyData.list[5].dt_txt.slice(11,16)}</p> : null }
                          <img className="small-icon" src={"https://openweathermap.org/img/wn/" + hI5 + "@2x.png"} alt="icon" />
                          { hourlyData.list ? <p className="small-text">{hourlyData.list[5].main.temp.toFixed()}°C </p> : null}
                        </div>
                        <div className="hr">
                            {hourlyData.list? <p className="small-text">{hourlyData.list[6].dt_txt.slice(11,16)}</p> : null }
                            <img className="small-icon" src={"https://openweathermap.org/img/wn/" + hI6 + "@2x.png"} alt="icon" />
                            { hourlyData.list ? <p className="small-text">{hourlyData.list[6].main.temp.toFixed()}°C </p> : null}
                        </div>
                    </div>
                    }
                    <hr />
                    
                    
                    {currentData.name !== undefined &&
                      <Daily />
                    }
                    


            </div>
                
            </div>
            {currentData.name !== undefined &&
              <div className="bottom">
                <div className="feels">
                {currentData.main ? <p className="bold">{currentData.main.feels_like.toFixed()}°C</p> : null}
                  <p>Feel Like</p>
                </div>
                <div className="humidity">
                {currentData.main ? <p className="bold">{currentData.main.humidity}%</p> : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                {currentData.wind ? <p className="bold">{currentData.wind.speed} MPH</p>: null}
                  <p>Wind Speed</p>
                </div>
            </div>
            }
            

        </div>
    </div>
  );
}

export default App;
