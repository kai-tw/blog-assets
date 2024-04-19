export const siteNavFunction = () => {
    document.getElementById("site-nav-toggle-button").addEventListener("click", () => {
        document.getElementById("site-nav").classList.toggle("show");

        const isShow = document.getElementById("site-nav").classList.contains("show");
        if (isShow) {
            document.getElementById("site-nav-toggle-button").classList.add("close");
            document.body.classList.add("on-site-nav-open");
        } else {
            document.getElementById("site-nav-toggle-button").classList.remove("close");
            document.body.classList.remove("on-site-nav-open");
        }
    });
};