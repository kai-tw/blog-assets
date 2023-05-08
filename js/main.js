'use strict';
window.addEventListener("load", function () {
	let script = document.createElement("script");
	script.defer = true;
	script.setAttribute("data-ad-client", "ca-pub-1579558558142906");
	script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
	document.head.appendChild(script);

	let gtag = document.createElement("script");
	gtag.onload = function () {
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'G-78YS8L7KEV');
	};
	gtag.defer = true;
	gtag.src = "//www.googletagmanager.com/gtag/js?id=G-78YS8L7KEV";
});

if (document.getElementsByClassName("twitter-tweet").length > 0)
	document.head.appendChild(scriptNode("//platform.twitter.com/widgets.js"));
document.getElementById("ctrl-panel").addEventListener("click", function (e) {
	let d;
	switch (e.target.id) {
		case "site-search-btn":
			d = document.getElementById("site-search");
			break;
		case "site-nav-btn":
			d = document.getElementById("site-nav");
			break;
		case "site-share-btn":
			d = document.getElementById("site-share");
			break;
		case "site-aside-toggle":
			d = document.getElementById("site-aside");
			break;
	}
	if (d) {
		d.classList.toggle("open");
		if (d.classList.contains("open")) {
			if (!e.target.classList.contains("active"))
				e.target.classList.add("active");
		}
		else if (e.target.classList.contains("active"))
			e.target.classList.remove("active");
	}
});

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-78YS8L7KEV');

function scriptNode(a, c = 0) {
	let s = document.createElement("script");
	s.src = a;
	s.defer = true;
	c != 0 ? s.onload = c : 0;
	return s;
}