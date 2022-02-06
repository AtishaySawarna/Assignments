function operation()
 {
       console.log(arguments);  

       var sum = 0;
       var mul = 1;  
       if(arguments[0]=="+" && arguments.length>=3)
       {
           for (var i = 1; i < arguments.length; i++)
           {
             sum += arguments[i]; 
           }  
           return sum;
       }


       if(arguments[0]=="*" && arguments.length>=3 )
       {
           for (var i = 1; i < arguments.length; i++)
           {
             mul *= arguments[i]; 
           }  
           return mul;
       }
        

       console.log("arguments are less then 3");
        
             
} 



console.log(operation('*', 7,5,6));  //210

console.log(operation('+', 7,5,6));  //18

console.log(operation('+', 7));  //undefined
