import "normalize.css";
import "@src/scss/style.scss";
import { siteNavFunction } from "@src/siteNavFunction.js";
import { HoyoCode } from "@src/post/HoyoCode.js";
import { MathJax } from "@src/MathJax.js";

siteNavFunction();

window.Post = {
    HoyoCode: HoyoCode,
};

MathJax.init();
