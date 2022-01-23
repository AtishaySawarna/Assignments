var number1=""
var number2=""
var operator=""
function output(num) {
    var para = document.getElementById('display');
    para.innerText = num;
}
function add(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2; 
    return sum;
}
function sub(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
     sum = num1 - num2; 
    return sum;
}
function mul(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
     sum = num1 * num2; 
    return sum;
}
function div(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
     sum = num1 / num2; 
    return sum;
}
function setoperator(newop) {
    operator = newop;
}

function merge(xyz) {
    if(operator == "") {
        number1 = number1 + xyz;
        output(number1);
    } else {
        number2 = number2 + xyz;
        output(number2);
    }

}

function back() {
    if(operator == "") {
        number1 = number1.slice(0, -1);
        output(number1);
    } else {
        number2 = number2.slice(0, -1);
        output(number2);
    }

}

function clearAll() {
    if(operator == "") {
        number1 = "";
        output(number1);
    } else {
        number2 = "";
        output(number2);
    }

}


function solve() {
    if(operator == "+") {
        number1 = add(number1, number2);
        number2 = "";
        operator = "";
        output(number1);
    } else if(operator == "*") {
        number1 = mul(number1, number2);
        number2 = "";
        operator = "";
        output(number1);
    }
    else if (operator == "-") {
        number1 = sub(number1, number2);
        number2 = "";
        operator = "";
        output(number1);
    }
    else if (operator == "/") {
        number1 = div(number1, number2);
        number2 = "";
        operator = "";
        output(number1);
    }
}


