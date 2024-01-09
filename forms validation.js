function validateform(){  
  var fname=document.getElementById('fname'); 
  var lname=document.getElementById('lname');
  var uname=document.getElementById('uname');   
  var email=document.getElementById('email'); 
  var password=document.getElementById('password');
  var password1=document.getElementById('password1');
  if (fname.value==null || fname.value==""){  
    alert("fName can't be blank");  
    return false;  
  }
  if (lname.value==null || lname.value==""){  
      alert("LastName can't be blank");  
      return false;  
    }
  if (fname.value==null || fname.value==""){  
      alert("fName can't be blank");  
      return false;  
    }
  if (email.value==null || email.value==""){  
      alert("Enter your Email");  
      return false;
      
  }
  if (password.value == "") 
  {
          alert("Please enter your password");
          password.focus();
          return false;
  }
  if(password.length!= ""){
         var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
          if(regex.test(password.value) === false) 
          {    alert("Please enter a valid pwd");
                  return false;
          }       
  }
  if(password.value != password1.value){
      alert("Password mismatch");
          return false;
  }
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email.value))
  {
  return (true)
  }
  else{
  alert("You have entered an invalid email address!")
  return (false)
  } 
}
/*mouse events*/
function start()
{
document.getElementById("move").addEventListener("mousemove", moveone, false );
document.getElementById("move").addEventListener("mouseout", leaveone, false );
}

function moveone()
{
document.getElementById("move").innerHTML ="MUSIC IS THE LANGUAGE OF SPIRIT";
}

function leaveone()
{
document.getElementById("move").innerHTML ="LIFE ISN'T A MUSIC PLAYER WHERE YOU CHOOSE WHAT IS BEING PLAYED";
}
window.addEventListener( "load", start, false );
window.addEventListener( "load", starts, false );
function starts()
	{
	document.getElementById("picture").addEventListener("mouseover", over, false );
	document.getElementById("picture").addEventListener("mouseout", out, false );
	}

	function over()
	{
	 document.getElementById("picture").setAttribute( "src", "yuvan2.jpg");
	}

	function out()
	{
	document.getElementById("picture").setAttribute( "src", "yuvan.jpg");
	}
  window.addEventListener( "load", start3, false );
  function start3()
  {
    document.getElementById("myform").addEventListener("submit",subfun, false );
    document.getElementById("myform").addEventListener("reset",resetfun, false );
    }

function subfun() 
  { window.alert("Are you Sure to submit");
      window.alert("Thank you");
  }
  function resetfun() 
    { 
      window.alert("Are you Sure to reset")
    }
    window.addEventListener( "load", start4, false );
    function start4()
    {
    document.getElementById("fname").addEventListener("focus",focusone, false );
    document.getElementById("lname").addEventListener("focus",focusone, false );
    document.getElementById("fname").addEventListener("blur", blurone, false );
    document.getElementById("pwd").addEventListener("focus",focustwo, false );
    document.getElementById("pwd").addEventListener("blur", blurone, false );
    document.getElementById("em").addEventListener("focus",focusthree, false );
    document.getElementById("em").addEventListener("blur", blurone, false );
    document.getElementById("phno").addEventListener("focus",focusfour, false );
    document.getElementById("phno").addEventListener("blur", blurone, false );
    document.getElementById("myform").addEventListener("submit",subfun, false );
    document.getElementById("myform").addEventListener("reset",resetfun, false );
    }
    function focusone() 
    {document.getElementById("help").innerHTML="Enter name" ;
    }
    
    function focustwo() 
    {document.getElementById("help").innerHTML="Enter password" ;
    }
    function focusthree() 
    {document.getElementById("help").innerHTML="Enter email" ;
    }
    function focusfour() 
    {document.getElementById("help").innerHTML="Enter mobile number" ;
    }
    function blurone() 
    { document.getElementById("help").innerHTML="" ;
    }
    function subfun() 
    { window.alert("Are you Sure to submit");
      window.alert("Thank you");
    }
    function resetfun() 
    {
    window.alert("Are you Sure to reset")}


  
