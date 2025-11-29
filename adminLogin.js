//given only 5 ids to work with valid-btn, if none of the ids are valid, return error and make them redo it

document.getElementById("admin-login-page").addEventListener("submit", function(event){
    event.preventDefault();
    const adminId= document.getElementById("admin-id").value;
    

    const adminIDs= ["1001", "1002", "1003", "1004", "1005"];
    //no passwords, just check ids

    if(adminIDs.includes(adminId))
    {
        alert("Login successful!");
        window.location.href= "adminHome.html";
    }
    else
    {
        alert("Invalid ID.");
        document.getElementById("admin-login-page").reset();
    }
});