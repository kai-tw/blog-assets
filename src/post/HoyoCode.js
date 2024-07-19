import {DateTimeUtility} from "@src/DateTimeUtility";

/**
 * HoyoCode
 * Article: https://blog.kai-wu.net/2022/11/genshin-redeem-code.html
 */
export const HoyoCode = {
    expireTimeNodeList: [],

    main: function (jsonString) {
        const data = JSON.parse(jsonString);
        data.sort((a, b) => {
            const expireTimeCompare = DateTimeUtility.timeCompare(a["expireTime"], b["expireTime"]);
            const addTimeCompare = DateTimeUtility.timeCompare(a["addTime"], b["addTime"]);
            return expireTimeCompare !== 0 ? expireTimeCompare : addTimeCompare !== 0 ? -addTimeCompare : a["code"].localeCompare(b["code"], 'en', {sensitivity: 'base'});
        });

        data.forEach((e) => {
            const node = document.getElementById(e["game"]);
            const lastNode = node.lastChild;
            const tableRow = document.createElement("tr");
            node.insertBefore(tableRow, lastNode);

            const codeTd = document.createElement("td");
            const expireTimeTd = document.createElement("td");
            const addTimeTd = document.createElement("td");
            const noteTd = document.createElement("td");
            codeTd.classList.add("non-word-wrap");
            expireTimeTd.classList.add("non-word-wrap");
            noteTd.classList.add("non-word-wrap");
            tableRow.appendChild(codeTd);
            tableRow.appendChild(expireTimeTd);
            tableRow.appendChild(addTimeTd);
            tableRow.appendChild(noteTd);

            /* Redeem code */
            const link = document.createElement("a");
            link.classList.add("font-monospace");
            link.href = (e["game"] === "hsr" ? "https://hsr.hoyoverse.com/gift?code=" :
                e["game"] === "genshin" ? "https://genshin.hoyoverse.com/gift?code=" :
                    "https://zenless.hoyoverse.com/redemption?code=") + e["code"];
            link.target = "__blank";
            link.innerText = e["code"];
            codeTd.appendChild(link);

            /* Expire time */
            if (e["expireTime"]) {
                expireTimeTd.expireTime = e["expireTime"];
                this.expireTimeNodeList.push(expireTimeTd);
            } else {
                expireTimeTd.innerText = "未知";
            }

            /* Add time */
            if (e["addTime"]) {
                const addTime = new Date(e["addTime"]);
                const nowTime = new Date();
                const diffDays = (nowTime - addTime) / 86400000;
                let wrapper = document.createElement(diffDays < 7 ? "mark" : "span");
                wrapper.innerText = addTime.toLocaleDateString();
                addTimeTd.appendChild(wrapper);
            }

            /* Note */
            if (e["note"]) {
                noteTd.innerText = e["note"];
            }
        });

        this.updatePromise();
    },

    updatePromise: function () {
        this.expireTimeNodeList.forEach((e, i) => {
            const string = DateTimeUtility.getTimeLeftString(e.expireTime);
            if (string === false) {
                e.parentElement.parentElement.removeChild(e.parentElement);
                this.expireTimeNodeList.splice(i, 1);
            } else {
                e.innerText = string;
            }
        });
        setTimeout(() => this.updatePromise(), 1000);
    },
};