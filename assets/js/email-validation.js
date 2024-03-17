function validateEmail() {
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert("Thank you for subscribing!");
    } else {
        alert("Please enter a valid email address.");
    }
}