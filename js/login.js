const eyeIcon = document.getElementById("eyee");
const inputBox = document.getElementById("password");
eyeIcon.addEventListener("click", () => {
  console.log("eyesss");
  if (inputBox.type === "password") {
    inputBox.type = "text";
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    inputBox.type = "password";
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
});

const submit_msg = document.getElementById("submit");
submit_msg.addEventListener("click", () => {
  let mail = "samikshyabchhetri@gmail.com";
  let pw = "neheart";
  const email_name = document.getElementById("email").value;
  const pww = document.getElementById("password").value;

  if (mail === email_name && pw === pww) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
});
