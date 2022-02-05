
var n = parseInt(prompt("enter length of array"));

var arr = [];

for(var i=0;i<n;i++){
    arr.push(parseInt(Math.random()*100));
}
function add(){
    let result = []
    for(var i=0;i<arr.length;i++){
        result.push((arr[i]+9));
    }
    return result;
}
function multiply(arr){
    let result = [];
    for(var i=0;i<arr.length;i++){
        result.push((arr[i]*4));
    }
    return result;
}
function arrayManipulate(arr,callback1,callback2){
    document.write("array<br>");
    for(var i=0;i<arr.length;i++){
        document.write(arr[i]+" ");
    }
    document.write("<br><br>");
    var result1 = callback1(arr);
    var result2 = callback2(arr);
    document.write("array add by 9 <br>")
    for(var i=0;i<result1.length;i++){
        document.write(result1[i]+" ");
    }
    document.write("<br><br>");
    document.write("array multiply by 4<br>");
    for(var i=0;i<result2.length;i++){
        document.write(result2[i]+" ");
    }
}
arrayManipulate(arr,add,multiply);