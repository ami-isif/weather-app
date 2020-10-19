import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home (){
/* eslint-disable react-hooks/exhaustive-deps */
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchLocation, setSearchLocation] = useState("Accra");

  function handleLoctionChange(event) {
    event.preventDefault();
    setSearchLocation(searchInputValue);
  }

  function handleSearchInputChange(event) {  
     setSearchInputValue(event.target.value);
  }

  function apiWeatherRequest(userLocation) {

      axios.get("http://api.weatherstack.com/current", { 
      params: {
        access_key: "a27c5a03f580ad96e0c2910643638fb5",
        query: userLocation
      }
    })
      .then( (response) => {
        console.log(response);
        setWeatherInfo(response.data);
      })
      .catch( (err) => {
        console.log(err);
      });
   }

  useEffect( ()=> {
    navigator.geolocation.getCurrentPosition((position) =>{
      var userPosition =position.coords.latitude + "," + position.coords.longitude;
      apiWeatherRequest(userPosition);
    })
  }, [])

useEffect(() => {
  if(weatherInfo !== null) {
    setIsDataLoaded(true);
  }
}, [weatherInfo]);

useEffect(()=> {
  if(weatherInfo !== null) { 
   apiWeatherRequest(searchLocation)
  }
}, [searchLocation]);

  return(
    <div className="container">

     <div className="weather-header-area text-center p-5 mb-5">
      <p className="location-text"> <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-fill location icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
      </svg> {isDataLoaded ? weatherInfo.location.name : "loading..."}</p>
      </div>
       
       <div className="d-flex weather-div justify-content-center">
       <img src={isDataLoaded ? weatherInfo.current.weather_icons[0] : "..."} width="60" alt="weather-icon"/>
       <h1 className="mx-4">{isDataLoaded ? weatherInfo.current.temperature : "-"}<sup>0</sup></h1>
       <h2>Today</h2>
    </div>

    <p className ="font-weight-bold text-center mb-5"> {isDataLoaded ? weatherInfo.current.weather_descriptions[0] : "Loading..."} </p>




<form className="form search-form">
    <div className="form-group mx-sm-3 mb-2 search-input-parent">
      <input type="text" className="search-input form-control" id="inputPassword2" placeholder="search a location here" value={searchInputValue} onChange={handleSearchInputChange}/>
      </div>
     <button type="submit" className="search btn btn btn-primary mb-2" onClick={handleLoctionChange}> search</button>    
    </form>

   </div>
  );
}

export default Home;