"use strict";

let calcOne = document.getElementById("empty-1");
let calcTwo = document.getElementById("empty-2");
let calcThree = document.getElementById("empty-3");
let convs = document.getElementById("convert-value");

convs.addEventListener("input", function () {
  btn.disabled = convs.value === "";
});

document.getElementById("btn").addEventListener("click", function convertAll() {
  let convAll = document.getElementById("convert-value").value;
  calcOne.textContent = "";
  calcTwo.textContent = "";
  calcThree.textContent = "";
  for (let i = 0; i < 1; i++) {
    let feet = convAll * 3.281;
    let meters = convAll / 3.281;
    calcOne.textContent += `${convAll} meters = ${feet.toFixed(
      3
    )} feet | ${convAll} feet = ${meters.toFixed(3)} meters `;
  }
  for (let i = 0; i < 1; i++) {
    let gallons = convAll * 0.264;
    let liters = convAll / 0.264;
    calcTwo.textContent += `${convAll} gallons = ${gallons.toFixed(
      3
    )} liters | ${convAll} liters =  ${liters.toFixed(3)} gallons `;
  }
  for (let i = 0; i < 1; i++) {
    let pounds = convAll * 2.204;
    let kilograms = convAll / 2.204;

    calcThree.textContent += `${convAll} kilograms = ${pounds.toFixed(
      3
    )} pounds | ${convAll} pounds =  ${kilograms.toFixed(3)} kilograms `;
  }
});
