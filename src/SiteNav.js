export const SiteNav = {
    init: function () {
        let buttonMap = this._buttonMap = {
            "site-nav-toggle-button": {
                target: "site-nav-list",
                lockScroll: LockScrollType.smallScreen
            },
            "site-search-toggle-button": {
                target: "site-search",
                lockScroll: LockScrollType.all
            },
        };

        Object.keys(buttonMap).forEach((key) => {
            document.getElementById(key).addEventListener("click", (event) => {
                if (this._activeButton && this._activeButton !== key) {
                    document.getElementById(this._activeButton).classList.remove("active");
                    document.getElementById(buttonMap[this._activeButton].target).classList.remove("show");
                    document.body.classList.remove(buttonMap[this._activeButton].lockScroll);
                }

                event.target.classList.toggle("active");
                const isOpen = event.target.classList.contains("active");

                if (isOpen) {
                    this._activeButton = key;
                    document.body.classList.add(buttonMap[key].lockScroll);
                    document.getElementById(buttonMap[key].target).classList.add("show");
                } else {
                    this._activeButton = null;
                    document.body.classList.remove(buttonMap[key].lockScroll);
                    document.getElementById(buttonMap[key].target).classList.remove("show");
                }
            });
        });
    },
}

const LockScrollType = {
    all: "lock-scroll",
    smallScreen: "lock-small-screen-scroll",
};