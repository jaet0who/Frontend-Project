//page will not redirect to home unless credentials are inputted.
//custom error message in case of empty fields, even if only one is empty.

const user= document.getElementById("user");
const pass= document.getElementById("pass");

document.getElementById("log-btn").addEventListener("click", function(event) {
    event.preventDefault();

    if(user.value==="" && pass.value==="")
    {
        alert("Empty fields. Enter credentials.");
        document.getElementById("cus-login").reset();
    }
    else if(user.value==="" || pass.value==="")
    {
        alert("Enter missing credentials.");
        document.getElementById("cus-login").reset();
    }
    else
    {
        window.location.href= "index.html";
    }
});