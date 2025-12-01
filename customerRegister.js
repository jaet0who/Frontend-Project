//check username-> must have numbers and letters, minimum is 5 characters
//check email-> must be of a valid format
// password-> minimum 8 characters, must include letters and numbers.
//confirm-> must match password

//->user cannot log into customerHome.html unless all criteris is met
//-> each criteria has its own error message
//-> ince all criteria is valid, only then will the register buttom take them to the customerHome.html page

document.getElementById('reg-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const username= document.getElementById("user");
    const email= document.getElementById("email");
    const password= document.getElementById("password");
    const confirmPass= document.getElementById("confirm-password");

    let isValid= true;
    //username
    const userRegx= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    
    if(!userRegx.test(username.value))
    {
        isValid= false;
    }
    else
    {
        username.setCustomValidity("");
    }

    //email
    if(!email.checkValidity())
    {
        email.setCustomValidity("Please enter a valid email address.");
        isValid= false;
    }
    else
    {
        email.setCustomValidity("");
    }

    //password
    const passRegex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passRegex.test(password.value))
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
    window.location.href= "customerHome.html";

});
