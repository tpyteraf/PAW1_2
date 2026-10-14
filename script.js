const ex3_elem = document.getElementById("ex3_element");
const ex3_one = document.getElementById("ex3_one");
const ex3_two = document.getElementById("ex3_two");

ex3_elem.draggable = true;

ex3_one.addEventListener("dragstart", (ev) => {
  ev.dataTransfer.setData("app/custom", ev.target.id);
});

ex3_two.addEventListener("dragover", (ev) => {
  if (ev.dataTransfer.types.includes("app/custom")) {
    ev.preventDefault();
  }
  ev.dataTransfer.dropEffect = "move";
});

ex3_two.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("app/custom");
  const elem = document.getElementById(data);

  if (elem) ex3_two.appendChild(elem);
});
