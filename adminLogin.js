//given only 5 ids to work with valid-btn, if none of the ids are valid, return error and make them redo it
//admin will NOT enter unless the credentials are inputted and they match the list given.
const adminIDs= ["1001", "1002", "1003", "1004", "1005"];

document.getElementById("valid-btn").addEventListener("click", function(event) 
{
    event.preventDefault();
    const adminIDs= ["1001", "1002", "1003", "1004", "1005"];
    const  givenID= document.getElementById("admin-id").value();

    if(givenID==="")
    {
        alert("Empty field. ID required.");
        document.getElementById("adminLogin.html").reset();
    }
    else if(givenID !== adminIDs)
    {
        alert("Invalid ID. Unauthorised access.");
        document.getElementById("adminLogin.html").reset();
    }
    else
    {
        while(givenID===adminIDS)
        {
            window.location.href= "admin-Book.html";
        }
    }
});
















/*document.getElementById("admin-login-page").addEventListener("submit", function(event){

    event.preventDefault();
    const adminId= document.getElementById("admin-id").value;
    

    const adminIDs= ["1001", "1002", "1003", "1004", "1005"];
    //no passwords, just check ids

    if(adminId.value==="")
    {
        alert("Enter admin ID");
        document.getElementById("adminLogin.html").reset();
    }
    
    if(adminIDs.includes(adminId))
    {
        alert("Login successful!");
        window.location.href= "adminHome.html";
    }
    else
    {
        alert("Invalid ID.");
        document.getElementById("adminLogin.html").reset();
    }
});*/