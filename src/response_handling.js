import { getWeatherResponse } from "./api_request";
import { getPositionResponse } from "./api_request";
import {ApiInformation} from "./api_request";
const getLatLon= async function(location){
	const response= await getPositionResponse(location);
	let lat=response.results[0].locations[0].latLng.lat;
	let lon=response.results[0].locations[0].latLng.lng;
	return({lat,lon});
};
const getLocation= function(){
	let input= document.getElementById("location");
	if(!input.value){return;}
	let location =input.value;
	console.log(location);
	return location;
};


