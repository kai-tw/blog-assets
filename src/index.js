import "normalize.css";
import "@src/scss/style.scss";
import { siteNavFunction } from "@src/siteNavFunction.js";
import { HoyoCode } from "@src/post/HoyoCode.js";

siteNavFunction();

window.Post = {
    HoyoCode: HoyoCode,
};
