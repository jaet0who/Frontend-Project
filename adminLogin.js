//given only 5 ids to work with valid-btn, if none of the ids are valid, return error and make them redo it
//admin will NOT enter unless the credentials are inputted and they match the list given.

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("log-btn").addEventListener("click", function(event) {
        event.preventDefault();

        const adminIDs = ["1001", "1002", "1003", "1004", "1005"];
        const givenID = document.getElementById("admin-id").value.trim();

        if (givenID === "") 
        {
            alert("Empty field. ID required.");
            document.getElementById("adminLogin").reset();
        } 
        else if (!adminIDs.includes(givenID)) 
        {
            alert("Invalid ID. Unauthorized access.");
            document.getElementById("adminLogin").reset();
        } 
        else 
        {
            window.location.href = "admin-Book.html";
        }
    });
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