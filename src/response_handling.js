import { getWeatherResponse } from "./api_request";
//import { getPositionResponse } from "./api_request";
import {ApiInformation} from "./api_request";
// ignoring this until getting a better geocoding API

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
	console.log(location);
	return location;
};
const getWeatherInfo= async function(){
	//const latLng= await getLatLon(getLocation());
	const info= await ApiInformation(getLocation(),"metric");
	return info;
};
const handleResponses= async function(){
	const obj= await getWeatherInfo();
	const weatherResponse= await getWeatherResponse(obj);
	//const locationResponse= await getPositionResponse(getLocation());
	return{weatherResponse};
};

export {handleResponses};

