const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

const p1 = document.getElementById('res1');
const p2 = document.getElementById('res2');
const p3 = document.getElementById('res3');
const p4 = document.getElementById('res4');

function compareMaxTwo() {
    p1.innerHTML = Math.max(+num1.value, +num2.value);
}

function compareMinTwo() {
    p2.innerHTML = Math.min(+num1.value, +num2.value);
}

function compareMaxThree() {
    if(num3.value) {
        p3.innerHTML = Math.max(+num1.value, +num2.value, +num3.value);
    }else {
        p3.innerHTML = "3-chi inputni to'ldiring"
    }
}

function compareMinThree() {
    if(num3.value) {
        p3.innerHTML = Math.min(+num1.value, +num2.value, +num3.value);
    }else {
        p3.innerHTML = "3-chi inputni to'ldiring"
    }}