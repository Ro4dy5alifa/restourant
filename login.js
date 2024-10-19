function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gmailError = document.getElementById("gmailError");
    var passwordError = document.getElementById("passwordError");
    var re = /\S+@\S+\.\S+/;
    var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!re.test(email)) {
        gmailError.textContent = "Invalid email.";
        return false;
    } else {
        gmailError.textContent = "";
    }
    if (!passwordReg.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return false;
    } else {
        passwordError.textContent = "";
    }

    document.getElementById("loginForm").action = "project.html";
    return true; 
}