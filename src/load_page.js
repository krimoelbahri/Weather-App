import { createMain } from "./load_main";
import { renderMain } from "./load_main";
import { createSideBar } from "./load_sideBar";
import { renderSideBar } from "./load_sideBar";

const loadSite = function(){
	let container= document.getElementById("container");
	container.appendChild(createMain());
	container.appendChild(createSideBar());
	let searchForm= document.getElementById("searchForm");
	searchForm.addEventListener("submit",renderPage);
};
export {loadSite};