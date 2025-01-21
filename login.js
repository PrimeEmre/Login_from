function submit() {
    // Receiving the values from the HTML file
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("Last_Name").value;
    let Email = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;

    // Setting the elements for if statement
    document.getElementById("FirstNameDisplay").innerHTML = FirstName;
    document.getElementById("LastNameDisplay").innerHTML = LastName;
    document.getElementById("EmailDisplay").innerHTML = Email;
    document.getElementById("PasswordDisplay").innerHTML = password;

    // Adding if and else statements
    if (FirstName && LastName && Email && password) {
        alert("Thank you for filling the form");
    } else {
        alert("Please fill all the fields");
        return; // Stop further execution if fields are not filled
    }

    // Check if FirstName and LastName are numbers (Invalid input)
    if (!isNaN(FirstName) || !isNaN(LastName)) {
        alert("Invalid name in first and/or last name fields");
    } else {
        alert("Valid name in first and last name fields");
    }
}

// Show/Hide password functionality
function show_password() {
    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Email sending logic
document.getElementById("sendEmail").addEventListener("click", async () => {
    // Getting the email inputs
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Check if email, subject, or message are empty
    if (!email || !subject || !message) {
        alert("You need to fill all the fields");
        return;
    }
    // It sends an email by passing user-provided data (email, subject, message) to the backend.
    try {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, subject, message }),
        });

        const result = await response.json();
        alert(result.message || "Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again.");
    }
});
