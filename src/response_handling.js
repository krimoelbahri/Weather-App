import { getWeatherResponse } from "./api_request";
import {ApiInformation} from "./api_request";
// ignoring this until getting a better geocoding API

//import { getPositionResponse } from "./api_request";
/*const getLatLon= async function(location){
	const response= await getPositionResponse(location);
	let lat=response.results[0].locations[0].latLng.lat;
	let lon=response.results[0].locations[0].latLng.lng;
	return({lat,lon});
};*/
const getLocation= function(){
	let input= document.getElementById("location");
	if(!input.value){return;}
	let location =input.value;
	return location;
};
const getWeatherInfo= async function(){
	//const latLng= await getLatLon(getLocation());
	const info= await ApiInformation(getLocation(),"metric");
	return info;
};
const handleResponses= async function(object){
	if(!object){
		object= await getWeatherInfo();
	}
	//const locationResponse= await getPositionResponse(getLocation());
	const weatherResponse= await getWeatherResponse(object);
	if(weatherResponse.response.status !== 200){
		return({status:weatherResponse.response.status, text:weatherResponse.response.statusText});
	}
	return{response:weatherResponse.weatherData,status:weatherResponse.response.status};
};

export {handleResponses};

