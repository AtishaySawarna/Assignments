
var head = document.getElementById("table");
var h1   = document.getElementById("h1");
h1.innerText = "University List"


var row = document.createElement("tr");
head.appendChild(row);

var th0 = document.createElement("th")
    var th1= document.createElement("th");
    var th2= document.createElement("th");
    var th3= document.createElement("th");
   


    th0.innerText="NAME";
    th1.innerText="DOMAINS";
    th2.innerText="STATE";
    th3.innerText="COUNTRY";
   

    row.appendChild(th0);
    row.appendChild(th1);
    row.appendChild(th2);
    row.appendChild(th3);
   

var url = "http://universities.hipolabs.com/search?country=india";

fetch(url)
.then((accept)=> {
     return accept.json()})
.then((final) => {
    // console.log(final);
// for( var i = 0 ; i < final.length; i++)
for( i in final)
{
    var row = document.createElement("tr");


    var td0 = document.createElement("td")
    var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    var td4= document.createElement("td");

    td0.innerText= final[i]["NAME"];
    td1.innerText=final[i]["DOMAIN"];
    td2.innerText=final[i]["STATE"];
    td3.innerText=final[i]["COUNTRY"];
    

    head.appendChild(row);

    row.appendChild(td0);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
  
    


}
})








