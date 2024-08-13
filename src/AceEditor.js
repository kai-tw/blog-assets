export const AceEditor = {
    className: "ace-editor",

    editorList: [],

    init: function () {
        let elements = document.getElementsByClassName(this.className);

        if (elements.length === 0) {
            return;
        }

        import("ace-builds").then(ace => {
            Array.from(elements).forEach(element => {
                let editorMode = element.dataset.mode ?? "text";
                let editorTheme = element.dataset.theme ?? "tomorrow_night";

                Promise.all([
                    import(`ace-builds/src-noconflict/mode-${editorMode}`),
                    import(`ace-builds/src-noconflict/theme-${editorTheme}`),
                ]).then(() => {
                    this.editorList.push(ace.edit(element, {
                        maxLines: element.dataset.maxLines ?? 10,
                        minLines: element.dataset.minLines ?? 6,
                        fontSize: element.dataset.fontSize ?? 14,
                        theme: `ace/theme/${editorTheme}`,
                        mode: `ace/mode/${editorMode}`,
                        tabSize: element.dataset.tabSize ?? 4,
                        readOnly: element.dataset.readOnly ?? false,
                    }));
                });
            });
        });
    },
}