import { htmlCreate } from "./domManipulation";
import {epochConverter} from "./epoch_converter";
import { handleResponses } from "./response_handling";
const sideBarInfoContainer= function(){
	let sideBarInfoContainer= htmlCreate("div","sideBarInfoContainer","");
	return sideBarInfoContainer;
};
const searchForm= function(){
	let searchForm= htmlCreate("form","searchForm","","web_searchForm");
	searchForm.innerHTML=`
    <input type="text" id="location" class="location" placeholder="Enter a location" required>
    <button type="submit" id="submit" >OK</button>
    `;
	return searchForm;
};
const createSideBar= function(){
	let sideBar= htmlCreate("div","sideBar","","web_sideBar");
	sideBar.appendChild(searchForm());
	sideBar.appendChild(sideBarInfoContainer());
	return sideBar;
};
const createMinTempDiv= function(temp){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let minTempDiv= htmlCreate("div","minTempDiv","","web_minTemp_div");
	let minTempInfo= htmlCreate("p","minTempInfo",`${parseInt(temp)}°`);
	minTempDiv.appendChild(minTempInfo);
	sideBarInfoContainer.appendChild(minTempDiv);
};
const createMaxTempDiv= function(temp){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let maxTempDiv= htmlCreate("div","maxTempDiv","","web_maxTemp_div");
	let maxTempInfo= htmlCreate("p","maxTempInfo",`${parseInt(temp)}°`);
	maxTempDiv.appendChild(maxTempInfo);
	sideBarInfoContainer.appendChild(maxTempDiv);
};
const createCloudDiv= function(cloud){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let cloudDiv= htmlCreate("div","cloudDiv","","web_cloud_div");
	let cloudInfo= htmlCreate("p","cloudInfo",`${cloud}%`);
	cloudDiv.appendChild(cloudInfo);
	sideBarInfoContainer.appendChild(cloudDiv);
};
const createHumidityDiv= function(humidity){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let humidityDiv= htmlCreate("div","humidityDiv","","web_humidity_div");
	let humidityInfo= htmlCreate("p","humidityInfo",`${humidity}%`);
	humidityDiv.appendChild(humidityInfo);
	sideBarInfoContainer.appendChild(humidityDiv);
};
const createWindDiv= function(wind){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let windDiv= htmlCreate("div","windDiv","","web_wind_div");
	let windInfo= htmlCreate("p","windInfo",`${wind} m/s`);
	windDiv.appendChild(windInfo);
	sideBarInfoContainer.appendChild(windDiv);
};
const createRainDiv= function(rain){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let rainDiv= htmlCreate("div","rainDiv","","web_rain_div");
	let rainInfo= htmlCreate("p","rainInfo",`${rain} mm`);
	rainDiv.appendChild(rainInfo);
	sideBarInfoContainer.appendChild(rainDiv);
};
const createSunriseDiv= function(timeStamp){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let sunriseDiv= htmlCreate("div","sunriseDiv","","web_sunrise_div");
	let time= epochConverter(timeStamp,"time");
	let sunriseInfo= htmlCreate("p","sunriseInfo",`${time}`);
	sunriseDiv.appendChild(sunriseInfo);
	sideBarInfoContainer.appendChild(sunriseDiv);
};
const createSunsetDiv= function(timeStamp){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let sunsetDiv= htmlCreate("div","sunsetDiv","","web_sunset_div");
	let time= epochConverter(timeStamp,"time");
	let sunsetInfo= htmlCreate("p","sunsetInfo",`${time}`);
	sunsetDiv.appendChild(sunsetInfo);
	sideBarInfoContainer.appendChild(sunsetDiv);
};
const renderSideBar= async function(){
	let info= await handleResponses();
	let minTemp= info.weatherResponse.main.temp_min;
	let maxTemp= info.weatherResponse.main.temp_max;
	let cloud= info.weatherResponse.clouds.all;
	let humidity= info.weatherResponse.main.humidity;
	let wind= info.weatherResponse.wind.speed;
	let rain= info.weatherResponse.rain;
	if(!rain){rain=0;}else{rain= info.weatherResponse.rain["1h"];}
	let sunrise= info.weatherResponse.sys.sunrise;
	let sunset= info.weatherResponse.sys.sunset;

	loadSideBar({minTemp,maxTemp,cloud,humidity,wind,rain,sunrise,sunset});
};
const loadSideBar= function(obj){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	sideBarInfoContainer.innerHTML="";
	createMinTempDiv(obj.minTemp);
	createMaxTempDiv(obj.maxTemp);
	createCloudDiv(obj.cloud);
	createHumidityDiv(obj.humidity);
	createWindDiv(obj.wind);
	createRainDiv(obj.rain);
	createSunriseDiv(obj.sunrise);
	createSunsetDiv(obj.sunset);
};
export{createSideBar};
export{renderSideBar};



