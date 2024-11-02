import "normalize.css";
import "@src/sass/style.sass";
import { AceEditor } from "@src/AceEditor.js";
import { SiteNav } from "@src/SiteNav.js";
import { HoyoCode } from "@src/post/HoyoCode.js";
import { MathJax } from "@src/MathJax.js";
import PokeCard from "@src/post/PokeCard.js";

window.Post = {
    HoyoCode: HoyoCode,
};

AceEditor.init();
MathJax.init()
SiteNav.init();
PokeCard.init();