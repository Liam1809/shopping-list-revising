"use strict";

let input = document.getElementById("userinput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let lis = document.getElementsByTagName("li");

const strikeThrough = (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("done");
};

const addPadding = (el) => {
  el.classList.add("liPadding");
};
const checkUserInput = () => (input.value.length > 0 ? true : false);

const createDeleteButton = () => {
  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.classList.add("deleteButton");

  return deleteButton;
};

const createNewElement = () => {
  let li = document.createElement("li");
  let deleteButton = createDeleteButton();

  li.appendChild(document.createTextNode(input.value));

  addPadding(li);

  li.appendChild(deleteButton);
  ul.appendChild(li);

  input.value = "";

  eventAfterDeleted(deleteButton);
};

const eventAfterDeleted = (el) => {
  el.addEventListener("click", () => {
    el.parentElement.remove();
  });
};
const eventAfterClicked = () => {
  if (checkUserInput()) {
    createNewElement();
  }
};

const eventAfterPressed = (event) => {
  if (checkUserInput() && event.which === 13) {
    createNewElement();
  }
};

const existingItems = () => {
  for (let i = 0; i < lis.length; i++) {
    let deleteButton = createDeleteButton();

    addPadding(lis[i]);

    lis[i].appendChild(deleteButton);

    eventAfterDeleted(deleteButton);
  }
};

button.addEventListener("click", eventAfterClicked);

input.addEventListener("keypress", eventAfterPressed);

ul.addEventListener("click", strikeThrough);

existingItems();
