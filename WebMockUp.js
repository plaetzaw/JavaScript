var container = document.querySelector("#container");
container.className = "container-fluid";
function makeLinks(element, content, className, attribute, parentID) {
  var link = document.createElement(element);
  link.textContent = content;
  link.className = className;
  link.setAttribute(attribute, "#");
  var parent = document.querySelector(parentID);
  parent.append(link);
}
function makeContainer(id, element, className, style = "", parentID) {
  var thing = document.createElement(element);
  thing.className = className;
  thing.id = id;
  thing.style = style;
  var parent = document.querySelector(parentID);
  parent.append(thing);
}
makeContainer(
  "headerNav",
  "nav",
  "navbar navbar-expand navbar-dark p-4",
  "background-color: rgb(82, 167, 250); ",
  "#container"
);
makeContainer("headerDiv", "div", "nav navbar-nav h3", "", "#headerNav");
makeLinks(
  "a",
  "HighOnCoding",
  "nav-item nav-link active",
  "href",
  "#headerDiv"
);
makeLinks(
  "a",
  "Home",
  "nav-item nav-link active small pl-5",
  "href",
  "#headerDiv"
);
makeLinks(
  "a",
  "Categories",
  "nav-item nav-link small pl-5",
  "href",
  "#headerDiv"
);
