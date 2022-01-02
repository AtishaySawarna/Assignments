var x = prompt("Enter the 1st number");
var y = prompt("Enter the 2nd number");
var z = prompt("Enter the 3rd number");

var min = 0;


if (x < y)
  {
    min= x;
  } else
  {
    min= y;
  }
  if (z < min) 
  {
    min= z;
  }

alert(min);