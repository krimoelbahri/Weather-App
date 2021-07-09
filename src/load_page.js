import { createMain } from "./load_main";
import { renderMain } from "./load_main";
import { createSideBar } from "./load_sideBar";
import { renderSideBar } from "./load_sideBar";
const renderPage= function(e){
	e.preventDefault();
	renderMain();
	renderSideBar();
};
const loadSite = function(){
	let container= document.getElementById("container");
	container.appendChild(createMain());
	container.appendChild(createSideBar());
	let searchForm= document.getElementById("searchForm");
	searchForm.addEventListener("submit",renderPage);
};
export {loadSite};