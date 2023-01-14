/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

// Task 1
// =======

// Write JavaScript below that console.logs:
// 1. all the "p" element nodes of the document,
// --> should log a list of nodes with a length of 6
const allP = document.querySelectorAll("p");
console.log("🚀 ~ allP", allP);

// 2. the first div element node
// --> should log the ".site-header" node
const fDiv = document.querySelector(".site-header");
console.log("🚀 ~ fDiv", fDiv);

// 3. the element with id "jumbotronText"
// --> should log the "#jumbotronText" node
const el = document.querySelectorAll("#jumbotronText");
console.log("🚀 ~ el", el);

// 4. all the "p" elements of contained inside the .primary-content element node
// --> should log a list of nodes with a length of 3
const allPInc = document
  .querySelector(".primary-content")
  .querySelectorAll("p");
console.log("🚀 ~ allPInc", allPInc);
const allPrr = document.querySelectorAll(".primary-content p");
console.log("🚀 ~ allP", allPrr);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const btnAl = document.querySelector("#alertBtn");
btnAl.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

const cC = document.querySelector("#bgrChangeBtn");
cC.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "red";
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

const links = document.querySelector("#largerLinksBtn");
links.addEventListener("click", () => {
  document
    .querySelectorAll("a")
    .forEach((link) => (link.style.fontSize = "larger"));
});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

const click = document.querySelector("#addArticleBtn");
click.addEventListener("click", () => {
  const p = document.createElement("p");
  const text = document.querySelector("#addArticleInput");
  const inputValue = text.value;

  p.innerText = inputValue;

  const mains = document.querySelector("#addArticle");
  mains.appendChild(p);
});
