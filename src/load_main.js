import { htmlCreate } from "./domManipulation";
import {epochConverter} from "./epoch_converter";
import { handleResponses } from "./response_handling";
const mainInfoContainer= function(){
	let mainInfoContainer= htmlCreate("div","mainInfoContainer","");
	return mainInfoContainer;
};
const createMain= function(){
	let main= htmlCreate("div","main","","web_main");
	main.appendChild(mainInfoContainer());
	return main;
};
const createTempDiv= function(temp){
	let mainInfoContainer=document.getElementById("mainInfoContainer");
	let tempDiv= htmlCreate("div","tempDiv","","web_temp_div");
	let tempInfo= htmlCreate("p","tempInfo",`${parseInt(temp)}°`);
	tempDiv.appendChild(tempInfo);
	mainInfoContainer.appendChild(tempDiv);
};
const createCityDiv= function(city,country){
	let mainInfoContainer=document.getElementById("mainInfoContainer");
	let cityDateDiv= htmlCreate("div","cityDateDiv","","web_cityDate_div");
	let cityName= htmlCreate("p","cityName",`${city}, ${country}`);
	cityDateDiv.appendChild(cityName);
	mainInfoContainer.appendChild(cityDateDiv);
};
const createDateDiv= function(date){
	let mainInfoContainer=document.getElementById("mainInfoContainer");
	let cityDateDiv= document.getElementById("cityDateDiv");
	let actualDate= htmlCreate("p","actualDate",epochConverter(date,"date"));
	cityDateDiv.appendChild(actualDate);
	mainInfoContainer.appendChild(cityDateDiv);
};
const createDescriptionDiv= function(description){
	let mainInfoContainer=document.getElementById("mainInfoContainer");
	let descIconDiv= document.getElementById("descIconDiv");
	let descriptionInfo= htmlCreate("p","descriptionInfo",`${description}`);
	descIconDiv.appendChild(descriptionInfo);
	mainInfoContainer.appendChild(descIconDiv);
};
const createIconDiv= function(icon){
	let mainInfoContainer=document.getElementById("mainInfoContainer");
	let descIconDiv= htmlCreate("div","descIconDiv","","web_descIcon_div");
	let iconInfo= htmlCreate("img","iconInfo","");
	iconInfo.src=`http://openweathermap.org/img/wn/${icon}.png`;
	descIconDiv.appendChild(iconInfo);
	mainInfoContainer.appendChild(descIconDiv);
};
const renderMain= async function(){
	let info= await handleResponses();
	let temp= info.weatherResponse.main.temp;
	let city= info.weatherResponse.name;
	let country= info.weatherResponse.sys.country;
	let date= info.weatherResponse.dt;
	let description= info.weatherResponse.weather[0].description;
	let icon= info.weatherResponse.weather[0].icon;
	loadMain({temp,city,country,date,description,icon});
};
const loadMain= function(obj){
	let mainInfoContainer=document.getElementById("mainInfoContainer");
	mainInfoContainer.innerHTML="";
	createTempDiv(obj.temp);
	createCityDiv(obj.city,obj.country);
	createDateDiv(obj.date);
	createIconDiv(obj.icon);
	createDescriptionDiv(obj.description);
};
export{createMain};
export{renderMain};