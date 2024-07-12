import React from "react";

function SearchBox(props){
    const [location,setLocation] = React.useState("dhanbad");
    function handleChange(event){
        setLocation(event.target.value)
    }
    function handleClick(){
        // console.log(location)
        props.onAdd(location);
        setLocation("");
        // event.prevenDefault();
    }
    return(
        <div className="search">
            <input onChange={handleChange} type="text" placeholder="Enter City Name" value={location} />
            <button onClick={handleClick}><i className="fa-solid fa-magnifying-glass fa-2xl" style={{color: "#f3f6fb"}}></i></button>
        </div>
    );
}

export default SearchBox;