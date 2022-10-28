const inputEl = document.getElementById("number");
const convertBtn = document.getElementById('convert-btn');

const convert1 = document.getElementById('convert1');
const convert2 = document.getElementById('convert2');
const convert3 = document.getElementById('convert3');

function convertmtf(num) {
    let result = num * 3.281
    return result;
}
function convertftm(num) {
    let result = num / 3.281
    return result;
}
function convertltg(num) {
    let result = num * 0.264
    return result;
}
function convertgtl(num) {
    let result = num / 0.264
    return result;
}
function convertktp(num) {
    let result = num * 2.204
    return result;
}
function convertptk(num) {
    let result = num / 2.204
    return result;
}

convertBtn.addEventListener('click', function() {
    let res1 = convertmtf(inputEl.value);
    let res2 = convertftm(inputEl.value);
    let res3 = convertltg(inputEl.value);
    let res4 = convertgtl(inputEl.value);
    let res5 = convertktp(inputEl.value);
    let res6 = convertptk(inputEl.value);

    convert1.innerHTML = `${inputEl.value} meters = ${res1.toFixed(3)} feet | ${inputEl.value} feet = ${res2.toFixed(3)} meters`
    convert2.innerHTML = `${inputEl.value} liters = ${res3.toFixed(3)} gallons | ${inputEl.value} gallons = ${res4.toFixed(3)} liters`
    convert3.innerHTML = `${inputEl.value} kilos = ${res5.toFixed(3)} pounds | ${inputEl.value} pounds = ${res6.toFixed(3)} kilos`
    
   
})
