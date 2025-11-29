//linking pages using buttons in signin.html
//login administrator should take us to adminLogin
//login cutsomer should take us to customerLogin

//button for adminlogin: admin-btn
//button for customerlogin: cus-btn

document.getElementById("admin-btn").onclick= takeToAdminLogin;
document.getElementById("cus-btn").onclick= takeToCustomerLogin;

function takeToAdminLogin()
{
    window.location.href= "adminLogin.html";
}

function takeToCustomerLogin()
{
    window.location.href= "customerLogin.html";
}

