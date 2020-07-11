import { random_item } from "./interfas.js";
// List HTMLDOM
const list = document.querySelector("#list");
// Insert Button HTMLDOM
const insert = document.querySelector("#insert");
// randonm Button HTMLDOM
const random = document.querySelector("#random");
// clear Button
const clear = document.querySelector("#clear");
// data Error HTMLDOM
const dataError = document.querySelector("#dataError").style;
// result Error HTMLDOM
const resultError = document.querySelector("#resultError").style;

let data = [];
const emptyList = `<li class="list-group-item">Vacia</li>`;

dataError.display = "none";
resultError.display = "none";

list.innerHTML = emptyList;

//function insert
insert.addEventListener("click", (e) => {
  e.preventDefault();
  // name Data HTML DOM
  const nameData = document.querySelector("#data");
  if (nameData.value.length !== 0) {
    data.push(nameData.value);
    nameData.value = "";
    dataError.display = "none";
    list.innerHTML = "";
    data.forEach((data) => {
      let li = document.createElement("LI");
      li.classList.add("list-group-item");
      li.innerHTML += data;
      list.appendChild(li);
    });
  } else {
    dataError.display = "block";
  }
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
  setTimeout(() => {
    result.value = "";
  }, 5000);
});

// function Clear list
clear.addEventListener("click", (e) => {
  e.preventDefault();
  data = [];
  list.innerHTML = emptyList;
});
