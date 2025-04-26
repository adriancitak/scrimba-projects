const btn = document.querySelector('button');
const lengthEl = document.querySelector('#length');
const volumeEl = document.querySelector('#volume');
const massEl = document.querySelector('#mass') 


function meterToFeet(num){
    return (num * 3.28084).toFixed(3);
}

function literToGallon(num){
    return (num * 0.264172).toFixed(3);
}

function kiloToPound(num){
    return (num * 2.20462).toFixed(3);
}

function feetToMeter(num){
    return (num * 0.3048).toFixed(3);
}

function gallonToLiter(num){
    return (num * 3.78541).toFixed(3);
}

function poundToKilo(num){
    return (num * 0.453592).toFixed(3);
}

btn.addEventListener('click', () => {
    let num = document.querySelector('input').value;
    const length = `${num} meters = ${meterToFeet(num)} feet | ${num} feet = ${feetToMeter(num)} meters`
    const volume = `${num} liters = ${literToGallon(num)} gallons | ${num} gallons = ${gallonToLiter(num)} liters`
    const mass = `${num} kilos = ${kiloToPound(num)} pounds | ${num} pounds = ${poundToKilo(num)} kilos`





    lengthEl.textContent = length;
    volumeEl.textContent = volume;
    massEl.textContent = mass;
    


})