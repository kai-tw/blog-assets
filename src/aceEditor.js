export const aceEditorLoader = () => {
    (new Promise((resolve, reject) => {
        // Request the script file.
        const scriptNode = document.createElement("script");
        scriptNode.onload = () => {
            resolve();
        }
        scriptNode.src = "https://cdn.jsdelivr.net/npm/ace-builds@1.32.0/src-min-noconflict/ace.min.js";
        document.head.appendChild(scriptNode);
    }))
        .then(() => {
            // Request the CSS style file.
            return new Promise((resolve, reject) => {
                const linkNode = document.createElement("link");
                linkNode.onload = () => {
                    resolve();
                }
                linkNode.rel = "stylesheet";
                linkNode.href = "https://cdn.jsdelivr.net/npm/ace-builds@1.32.0/css/ace.min.css";
            });
        })
        .then(() => {
            // Successfully load all the resources, and initialize.

        });
};