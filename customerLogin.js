//page will not redirect to home unless credentials are inputted.
//custom error message in case of empty fields, even if only one is empty.

const user= document.getElementById("user");
const pass= document.getElementById("pass");

document.getElementById("log-btn").addEventListener("click", function(event) {
    event.preventDefault();

    if(user.value==="" && pass.value==="")
    {
        alert("Empty fields. Enter credentials.");
        document.getElementById("customerLogin.html").reset();
    }
    else if(user.valaue==="" || pass.value==="")
    {
        alert("Enter missing credentials.");
        document.getElementById("customerLogin.html").reset();
    }
    else
    {
        window.location.href= "index.html";
    }
});