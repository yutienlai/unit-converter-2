/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input")
const button = document.getElementById("btn")
const lengthCon = document.getElementById("length-conversion")
const volumeCon = document.getElementById("volume-conversion")
const massCon = document.getElementById("mass-conversion")

button.addEventListener("click", function() {
   const feet = (inputEl.value * 3.281).toFixed(3)
   const meter = (inputEl.value / 3.281).toFixed(3)
   lengthCon.innerHTML = `${inputEl.value} meters = ${feet} feet |
    ${inputEl.value} feet = ${meter} meters`
    
   const gallons = (inputEl.value * 0.264).toFixed(3)
   const liters = (inputEl.value / 0.264).toFixed(3)
   volumeCon.innerHTML = `${inputEl.value} liters = ${gallons} gallons |
    ${inputEl.value} gallons = ${liters} liters`
    
   const pound = (inputEl.value * 2.204).toFixed(3)
   const kilo = (inputEl.value / 2.204).toFixed(3)
   massCon.innerHTML = `${inputEl.value} kilos = ${pound} pounds |
    ${inputEl.value} pounds = ${kilo} kilos`
    
    inputEl.value = ""
   
})