if (document.getElementsByClassName("twitter-tweet").length > 0)
	document.head.appendChild(scriptNode("https://platform.twitter.com/widgets.js"));

document.getElementById("site-header").addEventListener("click", function (e) {
	switch (e.target.id) {
	case "site-search-open":
		document.getElementById("site-search").classList.add("open");
		break;
	case "site-search-close":
		document.getElementById("site-search").classList.remove("open");
		break;
	case "site-nav-open":
		document.getElementById("site-nav").classList.add("open");
		break;
	case "site-nav-close":
		document.getElementById("site-nav").classList.remove("open");
		break;
	case "site-aside-toggle":
		document.body.classList.toggle("site-aside-expanded");
		break;
	}
});

let lazyload = {};

lazyload.img = {};
lazyload.background = {};

lazyload.main = function() {
	lazyload.img.main();
	lazyload.background.main();
};

lazyload.img.main = function() {
	let observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let img = new Image;
				entry.target.appendChild(img);
				if (img.complete) {
					img.classList.add("loaded");
					entry.target.classList.add("done");
				} else {
					img.addEventListener("load", function() {
						img.classList.add("loaded");
						entry.target.classList.add("done");
					});
				}
				img.src = entry.target.dataset.src;
				if (entry.target.dataset.alt) img.alt = entry.target.dataset.alt;
				if (entry.target.dataset.srcset) img.srcset = entry.target.dataset.srcset;
				observer.unobserve(entry.target);
			}
		});
	});
	for (let i = 0; i < lazyload.dom.length; i++) {
		if (lazyload.dom[i].dataset.src)
			observer.observe(lazyload.dom[i]);
	}
};

lazyload.background.main = function() {
	let observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let img = new Image;
				img.onload = function() {
					entry.target.style.backgroundImage = 'url(' + entry.target.dataset.background + ')';
					entry.target.classList.add("done");
				};
				img.src = entry.target.dataset.background;
				observer.unobserve(entry.target);
			}
		});
	});
	for (let i = 0; i < lazyload.dom.length; i++) {
		if (lazyload.dom[i].dataset.background)
			observer.observe(lazyload.dom[i]);
	}
}

lazyload.dom = document.getElementsByClassName("lazyload");
if (lazyload.dom.length > 0) lazyload.main();

let ra = {};
ra.dom = document.getElementById("related-article");
ra.data = new Array;
ra.max = 8;
ra.noImageAvailable = "//1.bp.blogspot.com/-NkizAITi-W8/XiQMhLmaFSI/AAAAAAAAZz0/JJ84CNmiFl0r_As8yUj5-w03rBabBMwHwCKgBGAsYHg/s90-c-rj-e30/noImg.jpg";
if (ra.dom) {
	ra.fragment = document.createDocumentFragment();
	ra.url = ra.dom.dataset.url;
	ra.label = ra.dom.dataset.label;
	document.head.appendChild(scriptNode("https://kai73002981.blogspot.com/feeds/posts/default/-/" + ra.label + "?alt=json-in-script&callback=ra.input&max-results=" + ra.max * 2, function () {
		let i = ra.max < ra.data.length ? ra.max : ra.data.length,
			m = new Array;
		for (let s = 0; m.push(s++) < ra.data.length;);
		if (m = m.sort(function () { return Math.random() - .5 }), ra.data.length <= 1) {
			let p = document.createElement("p");
			p.innerText = "沒有相關文章";
			ra.fragment.appendChild(p);
		} else
			for (let p = 0; p < i; p++) {
				let data = ra.data[m[p]];
				if (ra.url != data.link) {
					let post = document.createElement("div"),
						title = document.createElement("p"),
						thumbnail = document.createElement("picture"),
						link = document.createElement("a");
					post.classList.add("post");
					thumbnail.classList.add("thumbnail", "lazyload");
					thumbnail.dataset.src = data.thumbnail;
					thumbnail.dataset.alt = data.title;
					title.innerText = data.title;
					link.title = data.title;
					link.href = data.link;
					post.appendChild(thumbnail);
					post.appendChild(title);
					post.appendChild(link);
					ra.fragment.appendChild(post);
				}
			}
		ra.dom.appendChild(ra.fragment);
		lazyload.main();
	}));
}
ra.input = function (e) {
	for (let t = 0; t < e.feed.entry.length; t++) {
		let r = new Object,
			n = e.feed.entry[t];
		r.title = n.title.$t;
		try {
			r.thumbnail = n.media$thumbnail.url;
		} catch (e) {
			r.thumbnail = ra.noImageAvailable;
		}
		if (r.thumbnail.includes(".bp.blogspot.com")) {
			let a = r.thumbnail.split("/");
			a[7] = "s90-c-e30";
			r.thumbnail = a.join("/");
		}
		for (let l = 0; l < n.link.length; l++)
			if ("alternate" == n.link[l].rel) {
				r.link = n.link[l].href;
				break
			} for (var i = 0, m = 0; m < ra.data.length; m++)
			if (r.link == ra.data[m].link) {
				i = 1;
				break
			} i || ra.data.push(r)
	}
}

/* Share box */
if (document.getElementById("share-btn-hitbox")) {
	document.getElementById("share-btn-hitbox").addEventListener("click", function() {
		this.parentNode.classList.toggle("expand");
	});
}

function scrollToAnchor(name) {
	document.getElementById(name).scrollIntoView()
}
function scriptNode(a, c = 0) {
	let s = document.createElement("script");
	s.src = a;
	s.defer = true;
	c != 0 ? s.onload = c : 0;
	return s;
}
function cssNode(a, c = 0) {
	let s = document.createElement("link");
	s.href = a;
	s.rel = "stylesheet";
	c != 0 ? s.onload = c : 0;
	return s;
}
