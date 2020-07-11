import { random_item } from "./interfas.js";
// List HTMLDOM
const list = document.querySelector("#list");
// Insert Button HTMLDOM
const insert = document.querySelector("#insert");
// randonm Button HTMLDOM
const random = document.querySelector("#random");
// data Error HTML DOM
const dataError = document.querySelector("#dataError").style;
// result Error HTMLDOM
const resultError = document.querySelector("#resultError").style;

let data = [];

dataError.display = "none";
resultError.display = "none";

list.innerHTML = `<li class="list-group-item">Vacia</li>`;

//function insert
insert.addEventListener("click", (e) => {
  e.preventDefault();
  // name Data HTML DOM
  const nameData = document.querySelector("#data").value;
  if (nameData.length !== 0) {
    data.push(nameData);
    dataError.display = "none";
    list.innerHTML = "";
  } else {
    dataError.display = "block";
  }

  data.forEach((data) => {
    let li = document.createElement("LI");
    li.classList.add("list-group-item");
    li.innerHTML += data;
    list.appendChild(li);
  });
});

// funtion random
random.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.querySelector("#result");
  if (data.length !== 0) {
    result.value = random_item(data);
    resultError.display = "none";
  } else {
    resultError.display = "block";
  }
});
