const submit_button = document.getElementById("submit");
const submit_msg = document.getElementById("submit");
submit_button.addEventListener("click", async (e) => {
  e.preventDefault();
  submit_msg.innerHTML = "Please wait...";
  const emailName = document.getElementById("email").value;
  const pw = document.getElementById("pw").value;
  const confirm_pw = document.getElementById("confirm").value;
  const username = document.getElementById("name").value;
  if (pw == confirm_pw) {
    const data_pass = {
      email: emailName,
      password: pw,
      name: username,
    };
    const response = await fetch(
      "https://lms.sachetsubedi001.com.np/api/auth/register",
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
    submit_msg.innerHTML = "Register";

    if (response.status == "200") {
      localStorage.setItem("token", data.data.token);
      console.log(data);
      window.location.href = "../pages/dashboard.html";
    } else {
      alert(data.message);
    }
  } else {
    alert("confirmed password didnot match");
  }
});
