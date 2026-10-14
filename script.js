const ex3_elem = document.getElementById("ex3_element");
const ex3_one = document.getElementById("ex3_one");
const ex3_two = document.getElementById("ex3_two");

function dragstartHandler(ev) {
  ev.dataTransfer.setData("app/custom", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dragoverHandler(ev) {
  if (ev.dataTransfer.types.includes("app/custom")) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
}

function dropHandler(ev) {
  const data = ev.dataTransfer.getData("app/custom");
  const elem = document.getElementById(data);
  ev.preventDefault();

  if (elem) ev.currentTarget.appendChild(elem);
}

ex3_elem.draggable = true;

ex3_elem.addEventListener("dragstart", dragstartHandler);

ex3_one.addEventListener("dragover", dragoverHandler);
ex3_two.addEventListener("dragover", dragoverHandler);

ex3_one.addEventListener("drop", dropHandler);
ex3_two.addEventListener("drop", dropHandler);
