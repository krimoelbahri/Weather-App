const epochConverter= function(timeStamp,type){
	var myDate = new Date( timeStamp *1000);
	if(type==="date"){return myDate.toUTCString();}
	if(type==="time"){return myDate.toLocaleTimeString();}
};
export {epochConverter};