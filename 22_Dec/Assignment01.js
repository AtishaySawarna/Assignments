var arr = [];

var i = prompt("Enter first number");
i = parseInt(i);
arr.push(i);

i = prompt("Enter second number");
i = parseInt(i);
arr.push(i);


i = prompt("Enter third number");
i = parseInt(i);
arr.push(i);

if((arr[0] >= arr[1]) && (arr[0] >= arr[2])) {
  alert(arr[0]);
} else if ((arr[1] >= arr[0]) && (arr[1] >= arr[2])) {
  alert(arr[1]);
} else {
  alert(arr[2]);
}