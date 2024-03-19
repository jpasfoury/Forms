// JavaScript code for form validation
// Prevent form from submitting
document.getElementById("myForm").addEventListener("submit", function (event) {
  // Retrieve the input field value
  var inputValue = document.getElementById("inputField").value;

  // Regular expression pattern for alphanumeric input
  var alphanumericPattern = /^[a-zA-Z0-9]*$/;

  // Check if the input value matches the pattern
  if (!alphanumericPattern.test(inputValue)) {
    // Invalid input: display error message
    alert("Error: Input must be alphanumeric!");
    // Prevent form submission
    event.preventDefault();
  } else {
    // Valid input: display confirmation
    alert("Success: Form submitted!");
  }
});
