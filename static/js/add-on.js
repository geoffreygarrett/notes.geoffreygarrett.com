export const addTitleToCodeBlock = function() {
    let list = document.body.getElementsByClassName("highlight");

    for (i = 0; i <= list.length - 1; i++) {
        let code = list[i].firstElementChild.firstElementChild;
        let codeName = code ? code.className.split(":")[1] : null;

        if (codeName) {
            let div = document.createElement("div");
            div.textContent = codeName;
            div.classList.add("code-name");
            code.parentNode.insertBefore(div, code);
        }
    }
};