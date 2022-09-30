import "./styles.css";


function submit()
{
   let z=2;
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if(username === "username" && password === "password")
   {
    alert("Login successful!!");
   }
   else
   {
    alert("Invalid credential ");
   }
   
   return false;
}


var z = document.getElementById("submit")

if (z != null){
  
 
  document.getElementById("submit").onclick = function() {  
   
    submit();
  }; 
}




 
 
  

