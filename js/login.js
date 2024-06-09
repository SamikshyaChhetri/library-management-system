function toast(a, color) {
  const toastMessage = document.getElementById("toast");
  toastMessage.style.top = "10px";
  toastMessage.innerHTML = a;
  toastMessage.style.transition = "top 0.2s ease-in-out";
  toastMessage.style.backgroundColor = color;
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
    "https://lms.sachetsubedi001.com.np/api/auth/login",
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
    toast("Successfully signed in", "green");
    removetoast();
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("userid", data.data.user.id);
    setTimeout(() => {
      window.location.href = "../pages/dashboard.html";
    }, 1000);
  } else if (response.status == "401") {
    toast("Invalid password", "red");
    removetoast();
  } else if (response.status == "404") {
    toast("User not found", "red");
    removetoast();
  } else {
    toast("Server error", "red");
    removetoast();
  }
});
tokenFromLocalstorage = localStorage.getItem("token");
if (tokenFromLocalstorage) {
  window.location.href = "../pages/dashboard.html";
}
