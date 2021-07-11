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
	<div id="locationDiv" class="flex_C">
	<input type="text" id="location" class="location" placeholder="Enter a location" required>
	</div>
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
	let minTempDiv= htmlCreate("div","minTempDiv","");
	let minTempInfo= htmlCreate("p","minTempInfo","","sideBar_div");
	minTempInfo.innerHTML=`
		<div>Min Temperature</div>
		<div>${parseInt(temp)}°</div>
	`;
	minTempDiv.appendChild(minTempInfo);
	sideBarInfoContainer.appendChild(minTempDiv);
};
const createMaxTempDiv= function(temp){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let maxTempDiv= htmlCreate("div","maxTempDiv","");
	let maxTempInfo= htmlCreate("p","maxTempInfo","","sideBar_div");
	maxTempInfo.innerHTML=`
		<div>Max Temperature</div>
		<div>${parseInt(temp)}°</div>
	`;
	maxTempDiv.appendChild(maxTempInfo);
	sideBarInfoContainer.appendChild(maxTempDiv);
};
const createCloudDiv= function(cloud){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let cloudDiv= htmlCreate("div","cloudDiv","");
	let cloudInfo= htmlCreate("p","cloudInfo","","sideBar_div");
	cloudInfo.innerHTML=`
		<div>Cloudy</div>
		<div>${cloud}%</div>
	`;
	cloudDiv.appendChild(cloudInfo);
	sideBarInfoContainer.appendChild(cloudDiv);
};
const createHumidityDiv= function(humidity){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let humidityDiv= htmlCreate("div","humidityDiv","");
	let humidityInfo= htmlCreate("p","humidityInfo","","sideBar_div");
	humidityInfo.innerHTML=`
		<div>Humidity</div>
		<div>${humidity}%</div>
	`;
	humidityDiv.appendChild(humidityInfo);
	sideBarInfoContainer.appendChild(humidityDiv);
};
const createWindDiv= function(wind){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let windDiv= htmlCreate("div","windDiv","");
	let windInfo= htmlCreate("p","windInfo","","sideBar_div");
	windInfo.innerHTML=`
		<div>Wind</div>
		<div>${wind} m/s</div>
	`;
	windDiv.appendChild(windInfo);
	sideBarInfoContainer.appendChild(windDiv);
};
const createRainDiv= function(rain){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let rainDiv= htmlCreate("div","rainDiv","");
	let rainInfo= htmlCreate("p","rainInfo","","sideBar_div");
	rainInfo.innerHTML=`
		<div>Rain</div>
		<div>${rain} mm</div>
	`;
	rainDiv.appendChild(rainInfo);
	sideBarInfoContainer.appendChild(rainDiv);
};
const createSunriseDiv= function(timeStamp){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let sunriseDiv= htmlCreate("div","sunriseDiv","");
	let time= epochConverter(timeStamp,"time");
	let sunriseInfo= htmlCreate("p","sunriseInfo","","sideBar_div");
	sunriseInfo.innerHTML=`
		<div>Sunrise</div>
		<div>${time}</div>
	`;
	sunriseDiv.appendChild(sunriseInfo);
	sideBarInfoContainer.appendChild(sunriseDiv);
};
const createSunsetDiv= function(timeStamp){
	let sideBarInfoContainer=document.getElementById("sideBarInfoContainer");
	let sunsetDiv= htmlCreate("div","sunsetDiv","");
	let time= epochConverter(timeStamp,"time");
	let sunsetInfo= htmlCreate("p","sunsetInfo","","sideBar_div");
	sunsetInfo.innerHTML=`
		<div>Sunset</div>
		<div>${time}</div>
	`;
	sunsetDiv.appendChild(sunsetInfo);
	sideBarInfoContainer.appendChild(sunsetDiv);
};
const renderSideBar= async function(obj){
	let info;
	if(!obj){ info= await handleResponses();
	}else{info= await handleResponses(obj);}
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
	sideBarInfoContainer.innerHTML="<h1>Weather Details</h1>";
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



