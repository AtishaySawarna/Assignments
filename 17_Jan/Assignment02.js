
var str1 = prompt("enter first string ");
var str2 = prompt("enter second string");

var arr1 = str1.split('');
var arr2 = str2.split('');

arr1 = arr1.sort();
arr2 = arr2.sort();

str1 = arr1.join('');
str2 = arr2.join('');

var i=0,j=0,flag=0;

while(i<str1.length && j<str2.length){
    if(str1[i] == str2[j]){
        i++;
        j++;
    }
    else{
        flag = 1;
        break;
    }
}
if(flag==0){
    document.write("given strings are anagrams");
    document.write("<br>");
}
else{
    document.write("given strings are not anagrams");
}