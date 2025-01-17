function submit() {
    // Reciving the values form html file 
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("Last_Name").value;
    let Email = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;

    // Setting the  elements for if statment 
    document.getElementById('FirstName').innerHTML = FirstName;
    document.getElementById('Last_Name').innerHTML = LastName;
    document.getElementById('gmail').innerHTML = Email;
    document.getElementById('password').innerHTML = password;
    // Added if and else statamet
    if (FirstName && LastName && Email && password) {
        alert("Thank you for filling the form");
    } else {
        alert("Please fill all the fields");
    }
}