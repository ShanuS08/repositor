// script.js

function check() {
    // Get the input values
    var name = document.getElementById("s_name").value;
    var email = document.getElementById("s_email").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("s_password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
  
    // Check if all fields are filled
    if (name !== "" && email !== "" && number !== "" && password !== "" && confirmPassword!="") {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var mobileRegex = /^\d{10}$/;
        var usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
        var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{}[\]|;:"<>,./?]).{6,}$/;
        if(email.match(emailRegex)&&name.match(usernameRegex)&&number.match(mobileRegex)&&password.match(passwordRegex)&&password=== confirmPassword)
        {
            window.location.href = "home.html";
            
        }else{
            alert("Invalid Details!!");
        }
    } else {
      // Display an error message or perform any other validation logic
      alert("Please fill in all the details.");
    }
    
  }

    function myFunction(x) {
        x.style.background = "pink";
      }
  