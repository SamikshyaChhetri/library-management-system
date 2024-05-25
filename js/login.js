function toast(a) {
  const toastMessage = document.getElementById("toast");
  toastMessage.style.top = "0px";
  toastMessage.innerHTML = a;
  toastMessage.style.transition = "top 0.5s ease-in-out";
}
function removetoast() {
  setTimeout(() => {
    const toastMessage = document.getElementById("toast");
    toastMessage.style.top = "-50px";
  }, 4000);
}
const eyeIcon = document.getElementById("eyee");
const inputBox = document.getElementById("password");
eyeIcon.addEventListener("click", () => {
  if (inputBox.type === "password") {
    inputBox.type = "text";
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    inputBox.type = "password";
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
});
const submit_msg = document.getElementById("submit");
const title = document.getElementById("title");
submit_msg.addEventListener("click", async (e) => {
  e.preventDefault();
  submit_msg.innerHTML = "Please wait...";

  const emailName = document.getElementById("email").value;
  const pw = document.getElementById("password").value;
  const data_pass = {
    email: emailName,
    password: pw,
  };
  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/auth/logIn",
    {
      method: "post",
      body: JSON.stringify(data_pass),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
  console.log(response.status);
  submit_msg.innerHTML = "Login";
  if (response.status == "200") {
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("userid", data.data.user.id);
    window.location.href = "../pages/dashboard.html";
  } else if (response.status == "401") {
    // alert("Invalid  password");
    toast("Invalid password");
    removetoast();
  } else if (response.status == "404") {
    // alert("User not found");
    toast("User not found");
    removetoast();
  } else {
    // alert("Server error");
    toast("Server error");
    removetoast();
  }
});
// tokenFromLocalstorage = localStorage.getItem("token");
// if (tokenFromLocalstorage) {
//   window.location.href = "../pages/dashboard.html";
// }
