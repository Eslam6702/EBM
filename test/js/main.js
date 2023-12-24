let userName = prompt("Enter your name:");
if (userName !== null && userName !== "") {
    console.log("Hello, " + userName + "! Welcome!");
} else {
    console.log("Hello! Please enter your name.");
}