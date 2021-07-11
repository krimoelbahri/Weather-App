async function getWeatherResponse(apiInfo){
	try {
		const response= await fetch(`https://api.openweathermap.org/data/2.5/weather
		?q=${apiInfo.location}
		&appid=8452a2b6a15ac50fd5228bc842e291e1
		&units=${apiInfo.units}`,{mode: "cors"}); 
		if(response.status!== 200){
			return {response};
		}else{
			const weatherData= await response.json();
			return({weatherData:weatherData,response:response});
		}
	} catch (err){
		return(err);
	}
}
let ApiInformation= function(location,units){
	//let lat= location.lat;
	//let lon= location.lon;
	return{location,units};
};
// ignoring this until getting a better geocoding API
/*async function getPositionResponse(location){
	try{
		const response= await fetch(`http://www.mapquestapi.com/geocoding/v1/address
		?key=pjoWh14Q0KiA841WCQxvZFfI6SqTI121
		&location=${location}`,{mode: "cors"});
		const positionData= await response.json();
		console.log(positionData);
		return(positionData);
	}catch(err){
		return err;
	}
} 
export {getPositionResponse};*/
export {ApiInformation};
export{getWeatherResponse};

