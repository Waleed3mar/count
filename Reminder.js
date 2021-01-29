import { createNew } from "./CalcTime.js";

const input = document.querySelector(".add input"),
  addButton = document.querySelector(".plus"),
  list = document.querySelector(".tasksList"),
  tOfDate = document.querySelector("#evenTime");

//Add new event
addButton.onclick = (_) => {
  createNew(input, tOfDate, list);
};

//Delete events
document.addEventListener("click", function (e) {
  let tasks = document.querySelectorAll(".tasksList .taskCont");
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
  }
});