export const MathJax = {
    className: "mathJax-node",
    version: "3.2.2",

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
        script.src = `https://cdn.jsdelivr.net/npm/mathjax@${this.version}/es5/tex-mml-chtml.min.js`;
        script.defer = true;
        document.head.appendChild(script);
    },
};
