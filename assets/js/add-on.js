
var addon = function(event) {
  var els = document.getElementsByClassName("highlight");
  for (var i = 0; i < els.length; i++) {
    if (els[i].title.length) {
      let div = document.createElement("div");
      div.textContent=els[i].title;
      div.classList.add("code-name")
      // var textNode = document.createTextNode(els[i].title);
      // newNode.appendChild(textNode);
      // newNode.classList.add("code-name");
      els[i].parentNode.insertBefore(div, els[i]);
    }
  }
};
window.addEventListener("DOMContentLoaded", addon);