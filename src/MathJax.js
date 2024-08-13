export const MathJax = {
    className: "mathJax-node",

    init: function () {
        let elements = document.getElementsByClassName(this.className);

        if (elements.length === 0) {
            return;
        }

        window.MathJax = {
            startup: {
                elements: elements,
            },

            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            }
        };

        let script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.min.js";
        script.defer = true;
        document.head.appendChild(script);
    },
};
