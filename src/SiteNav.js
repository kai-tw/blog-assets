export const SiteNav = {
    init: function () {
        let buttonMap = this._buttonMap = {
            "site-nav-toggle-button": "site-nav-list",
            "site-search-toggle-button": "site-search"
        };

        Object.keys(buttonMap).forEach((key) => {
            document.getElementById(key).addEventListener("click", (event) => {
                let button = event.target;
                let body = document.body;
                let targetNode = document.getElementById(buttonMap[key]);

                if (button.classList.contains("close")) {
                    button.classList.remove("close");
                    body.classList.remove("lock-scroll");
                    targetNode.classList.remove("show");
                } else {
                    if (body.classList.contains("lock-scroll")) {
                        this._closeAll();
                    } else {
                        body.classList.add("lock-scroll");
                    }
                    button.classList.add("close");
                    targetNode.classList.add("show");
                }
            });
        });
    },

    _closeAll: function () {
        Object.keys(this._buttonMap).forEach((key) => {
            document.getElementById(key).classList.remove("close");
            document.getElementById(this._buttonMap[key]).classList.remove("show");
        });
    },
}