const eyeIcon = document.getElementById("eyee");
const inputBox = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
  console.log("eyesss");
  if (inputBox.type === "password") {
    inputBox.type = "text";
    eyeIcon.classlist.replace("fa-slash-eye", "fa-eye");
  } else {
    inputBox.type = "password";
    eyeIcon.classList.replace("fa-eye", "fa-slash-eye");
  }
});
