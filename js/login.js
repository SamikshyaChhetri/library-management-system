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
// const loc = window.location.href;
// console.log(loc);

const submit_msg = document.getElementById("submit");
submit_msg.addEventListener("click", (e) => {
  e.preventDefault();
  let mail = "samikshyabchhetri@gmail.com";
  let pw = "neheart";
  const email_name = document.getElementById("email").value;
  const pww = document.getElementById("password").value;
  if (mail === email_name && pw === pww) {
    console.log("correct");
    window.location.href = "../pages/dashboard.html";
  } else {
    window.alert("Invalid email or password");
  }
});

const data = {
  email: "samuu@gmail.com",
  password: "hehehe",
};
async function fetchSignIN() {
  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/auth/logIn",
    {
      method: "post",
      body: "data",
      body: JSON.stringyfy(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
}
fetchSignIN();
