// no empty field should be left behind, else user cannot register.
//username must be alphanumeric, no longer than 5 and no smaller.
//same thing with password, but at least 8 letters long, it must match with confirm.
//email must have correct format.
//goes in sequence, no prioritisation. If one field is empty an error shows up on that field, no other.
document.getElementById('reg-btn').addEventListener('click', function(event) 
{
    event.preventDefault();
    const user= document.getElementById("user");
    const email= document.getElementById("email");
    const pass= document.getElementById("password");
    const confirmPass= document.getElementById("confPass");

    let validity= true;

    //user
    const userCheck= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    if(user.value==="")
    {
        user.setCustomValidity("This field cannot be empty.");
        validity= false;
    }
    while(user.value!=="")
    {
        if(!userCheck.test(user.value))
        {
            user.setCustomValidity("Must be alphanumeric and of 5 characters.");
            validity= false;
            break;
        }
        else
        {
            user.setCustomValidity("");
            break;
        }
    }

    //email
    const emailCheck= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value==="")
    {
        email.setCustomValidity("This field cannot be empty.");
        validity= false;
    }
    while(email.value!=="")
    {
        if(!emailCheck.test(email.value))
        {
            email.setCustomValidity("Invalid format.");
            validity= false;
            break;
        }
        else
        {
            email.setCustomValidity("");
            break;
        }
    }

    //password
    const passCheck= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(pass.value==="")
    {
        pass.setCustomValidity("This field cannot be empty.");
        validity= false;
    }
    while(pass.value!=="")
    {
        if(!passCheck.test(pass.value))
        {
            pass.setCustomValidity("Must be alphanumeric and atleast 8 characters long.");
            validity= false;
            break;
        }
        else
        {
            pass.setCustomValidity("");
            break;
        }
    }

    //confirmation
    if(confirmPass.value==="")
    {
        confirmPass.setCustomValidity("This field cannot be empty.");
        validity=false;
    }
    while(confirmPass.value!=="")
    {
        if(confirmPass.value !== pass.value)
        {
            confirmPass.setCustomValidity("Passwords do not match.");
            validity= false;
            break;
        }
        else
        {
            confirmPass.setCustomValidity("");
            break;
        }
    }

    if(!validity)
    {
        user.reportValidity();
        email.reportValidity();
        pass.reportValidity();
        confirmPass.reportValidity();
        return;
    }

    if(validity)
    {
        window.location.href= "customerLogin.html";
    }

});


















/*document.getElementById('reg-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const username= document.getElementById("user");
    const email= document.getElementById("email");
    const password= document.getElementById("password");
    const confirmPass= document.getElementById("confirm-password");

    let isValid;
    
    /*const userCheck;
    const emailCheck;
    const passCheck;
    const confirmPassCheck;*/
      
    //username
   /* const userCheck= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    
    if(!userCheck.test(username.value))
    {
        username.setCustomValidity("Either username or password is wrong.");
        isValid= false;
    }
    else
    {
        username.setCustomValidity("");
    }

    //email
    if(!email.checkValidity())
    {
        email.setCustomValidity("Either username or email format is wrong.");
        isValid= false;
    }
    else
    {
        email.setCustomValidity("");
    }

    //password
    const passCheck= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passCheck.test(password.value))
    {
        password.setCustomValidity("Password must be atleast 8 characters long and contain both letters and numbers.");
        isValid= false;
    }
    else
    {
        password.setCustomValidity("");
    }

    //confirmation
    if(confirmPass.value !== password.value)
    {
        confirmPass.setCustomValidity("Passwords do not match.");
        isValid= false;
    }
    else
    {
        confirmPass.setCustomValidity("");
    }

    if(!isValid)
    {
        username.reportValidity();
        email.reportValidity();
        password.reportValidity();
        confirmPass.reportValidity();
        return;
    }

    alert("Account created!");
    window.location.href= "index.html";

});*/
