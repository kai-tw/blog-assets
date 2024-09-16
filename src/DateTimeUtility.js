export const DateTimeUtility = {
    timeCompare: function (a, b) {
        const aTime = new Date(a ?? 8640000000000000);
        const bTime = new Date(b ?? 8640000000000000);
        return aTime - bTime;
    },

    getTimeDiffString: function (a, b) {
        let aTime = a ? new Date(a) : new Date();
        let bTime = b ? new Date(b) : new Date();
        let timeElapsed = aTime - bTime;

        if (timeElapsed <= 0) {
            return this.getTimeDiffString(b, a);
        }

        timeElapsed /= 1000;
        timeElapsed /= 60;
        const min = Math.floor(timeElapsed % 60);
        timeElapsed /= 60;
        const hour = Math.floor(timeElapsed % 24);
        timeElapsed /= 24;
        const day = Math.floor(timeElapsed);
        const d = [day, hour, min];
        const unit = ["天", "小時", "分"];
        let timeLeftString = [];
        for (let i = 0, j = 0; j < 2 && i < d.length; i++) {
            if (d[i] === 0) {
                continue;
            }
            timeLeftString.push(d[i].toString());
            timeLeftString.push(unit[i]);
            j++;
        }
        return timeLeftString.join(" ");
    },

    getTimeLeftString: function (expireTime) {
        let timeElapsed = (new Date(expireTime)) - (new Date());

        if (timeElapsed <= 0) {
            return false;
        }

        return "剩餘 " + this.getTimeDiffString(expireTime);
    },
};