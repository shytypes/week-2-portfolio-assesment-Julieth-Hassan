let form = document.querySelector("form");

const handleFormSubmit = (e) => {
  e.preventDefault();

  // Get values from the form
  let fullName = document.querySelector("#fullName").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;
  let resultView = document.querySelector("#result-view");

  // Create a JavaScript object
  const userData = {
    fullName: fullName,
    email: email,
    subject: subject,
    message: message,
  };

  // Convert to JSON string for console
  const userDataAsJson = JSON.stringify(userData);

  // Show in console
  console.log("Form Submitted:");
  console.log(userData);
  console.log(userDataAsJson);

  // Show in the browser
  resultView.innerHTML = `
    <li><strong>Full Name:</strong> ${userData.fullName}</li>
    <li><strong>Email:</strong> ${userData.email}</li>
    <li><strong>Subject:</strong> ${userData.subject}</li>
    <li><strong>Message:</strong> ${userData.message}</li>
  `;
};

form.addEventListener("submit", handleFormSubmit);
