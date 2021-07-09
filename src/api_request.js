async function getWeatherResponse(apiInfo){
	try {
		const response= await fetch(`https://api.openweathermap.org/data/2.5/onecall
		?lat=${apiInfo.lat}
		&lon=${apiInfo.lon}
		&appid=8452a2b6a15ac50fd5228bc842e291e1
		&units=${apiInfo.units}`,{mode: "cors"}); 
		const weatherData= await response.json();
		console.log(weatherData);
		return(weatherData);
	} catch (err){
		console.log(err);
		return(err);
	}
}
export{getWeatherResponse};

