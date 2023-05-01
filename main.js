'use strict';

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
