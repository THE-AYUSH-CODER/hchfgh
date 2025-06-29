let htmlCode = document.querySelector("#htmlCode");
let cssCode = document.querySelector("#cssCode");
let jsCode = document.querySelector("#jsCode");

let languageHtml = document.querySelector("#languageHtml");
let languageCss = document.querySelector("#languageCss");
let languageJs = document.querySelector("#languageJs");

function updateHighlight() {
  languageHtml.innerHTML = Prism.highlight(
    htmlCode.value,
    Prism.languages.html,
    "html"
  );
  languageCss.innerHTML = Prism.highlight(
    cssCode.value,
    Prism.languages.css,
    "css"
  );
  languageJs.innerHTML = Prism.highlight(
    jsCode.value,
    Prism.languages.js,
    "js"
  );
}

htmlCode.addEventListener("input", updateHighlight);
cssCode.addEventListener("input", updateHighlight);
jsCode.addEventListener("input", updateHighlight);
window.addEventListener("load", updateHighlight);

htmlCode.addEventListener("scroll", () => {
  languageHtml.parentElement.scrollTop = htmlCode.scrollTop;
});

cssCode.addEventListener("scroll", () => {
  languageCss.parentElement.scrollTop = cssCode.scrollTop;
});

jsCode.addEventListener("scroll", () => {
  languageJs.parentElement.scrollTop = jsCode.scrollTop;
});
// let editor = document.querySelectorAll('.editor')

// editor.addEventListener("keydown", function (e) {
//   if (e.key === "Tab") {
//     e.preventDefault();
//     const start = this.selectionStart;
//     const end = this.selectionEnd;

//     // Insert two spaces at caret
//     const spaces = "  ";
//     this.value =
//       this.value.substring(0, start) + spaces + this.value.substring(end);

//     // Move caret forward by 2
//     this.selectionStart = this.selectionEnd = start + spaces.length;
//   }
// });

const htmlTab = document.querySelector("#html");
const cssTab = document.querySelector("#css");
const jsTab = document.querySelector("#js");

const htmlCodeEditor = document.querySelector("#html-code-editor");
const cssCodeEditor = document.querySelector("#css-code-editor");
const jsCodeEditor = document.querySelector("#js-code-editor");

htmlTab.addEventListener("click", () => {
  htmlCodeEditor.style.zIndex = "10";
  cssCodeEditor.style.zIndex = "5";
  jsCodeEditor.style.zIndex = "5";
  htmlTab.className = "active";
  cssTab.className = "lang";
  jsTab.className = "lang";
});

cssTab.addEventListener("click", () => {
  cssCodeEditor.style.zIndex = "10";
  htmlCodeEditor.style.zIndex = "5";
  jsCodeEditor.style.zIndex = "5";
  cssTab.className = "active";
  htmlTab.className = "lang";
  jsTab.className = "lang";
});

jsTab.addEventListener("click", () => {
  jsCodeEditor.style.zIndex = "10";
  htmlCodeEditor.style.zIndex = "5";
  cssCodeEditor.style.zIndex = "5";
  jsTab.className = "active";
  htmlTab.className = "lang";
  cssTab.className = "lang";
});

let goLiveBtn = document.querySelector("#goLive");
let portBtn = document.querySelector("#port");
let live;

function showOutput() {
  const html = htmlCode.value;
  console.log(html);
  const css = "<style>" + cssCode.value + "</style>";
  console.log(css);
  const js = "<script>" + jsCode.value + "</script>";
  console.log(js);
  const output = document.getElementById("outputArea").contentWindow.document;

  output.open();
  output.write(css + html + js);
  output.close();
}

function setItem() {
  live = window.open("output.html", "_blank");
  goLiveBtn.style.display = "none";
  portBtn.style.display = "block";

  localStorage.setItem("html", document.getElementById("htmlCode").value);
  localStorage.setItem("css", document.getElementById("cssCode").value);
  localStorage.setItem("js", document.getElementById("jsCode").value);
  window.open("output.html");
}

portBtn.addEventListener("click", () => {
  live.close();
  portBtn.style.display = "none";
  goLiveBtn.style.display = "block";
});

