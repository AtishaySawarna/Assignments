
var data = 0;
var data_run =true;

  

document.getElementById("counter").innerText = data;
  
//creation of increment function
function add() {

    var myrun=setInterval(function(){
        data++;
        document.getElementById("counter").innerText = data;
    },1000);
}


function wait(){
     clearInterval(myrun);
     data_run=false;

 }

function sub() 
{
    if(data_run == false) {
        var mydown = setInterval(function() {
            data--;
            document.getElementById("counter").innerText = data;
        }, 1000);
    }
}

function clear() {
    data = 0;
    document.getElementById("counter").innerText = data;
    
}
   
    
