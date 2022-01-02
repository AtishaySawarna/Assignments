var n = prompt("give number");
{
   for(i=2;i<=n/2;i++)
{
   if(n%i==0)
{
break;
}
}
if(i>n/2)
alert("number is prime number");
else
alert("number is not a prime number");
}