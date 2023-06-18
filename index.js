"use strict";

let calcOne = document.getElementById("empty-1");
let calcTwo = document.getElementById("empty-2");
let calcThree = document.getElementById("empty-3");

document.getElementById("btn").addEventListener("click", function convertAll() {
  let convAll = document.getElementById("convert-value").value;
  calcOne.textContent = "";
  calcTwo.textContent = "";
  calcThree.textContent = "";
  for (let i = 0; i < 1; i++) {
    let feet = convAll * 3.281;
    calcOne.textContent += Math.round(feet * 1000) / 1000;
  }
  for (let i = 0; i < 1; i++) {
    let gallons = convAll * 0.264;
    calcTwo.textContent += Math.round(gallons * 1000) / 1000;
  }
  for (let i = 0; i < 1; i++) {
    let pounds = convAll * 2.204;
    calcThree.textContent += Math.round(pounds * 1000) / 1000;
  }
});
