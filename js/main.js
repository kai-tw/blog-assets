'use strict';

/**
 * Event listeners.
 */
document.getElementById("site-nav-open-button").addEventListener("click", openSiteNav);
document.getElementById("site-nav-close-button").addEventListener("click", closeSiteNav);
document.getElementById("site-nav-dummy").addEventListener("click", closeSiteNav);

/**
 * Function definitions.
 */
function openSiteNav() {
	document.getElementById("site-nav-list").classList.add("show");
	document.getElementById("site-nav-dummy").classList.add("show");
}

function closeSiteNav() {
	document.getElementById("site-nav-list").classList.remove("show");
	document.getElementById("site-nav-dummy").classList.remove("show");
}