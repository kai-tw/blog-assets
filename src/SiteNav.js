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
                const isOpen = event.target.classList.contains("close");
                this._closeAll();

                if (!isOpen) {
                    event.target.classList.add("close");
                    document.body.classList.add(buttonMap[key].lockScroll);
                    document.getElementById(buttonMap[key].target).classList.add("show");
                }
            });
        });
    },

    _closeAll: function () {
        document.body.classList.remove(...Object.values(LockScrollType));
        Object.keys(this._buttonMap).forEach((key) => {
            document.getElementById(key).classList.remove("close");
            document.getElementById(this._buttonMap[key].target).classList.remove("show");
        });
    },
}

const LockScrollType = {
    all: "lock-scroll",
    smallScreen: "lock-small-screen-scroll",
};