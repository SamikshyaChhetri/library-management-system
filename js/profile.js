const tokenFromLocalstorage = localStorage.getItem("token");
if (!tokenFromLocalstorage) {
  window.location.href = "../pages/login.html";
}
async function fetchData() {
  useridfromlocalstorage = localStorage.getItem("userid");
  useremailfromlocalstorage = localStorage.getItem("userid");
  console.log(useridfromlocalstorage);
  const response = await fetch(
    "Https://lms.sachetsubedi001.com.np/api/auth/user/" +
      useridfromlocalstorage,
    {
      method: "get",
    }
  );
  const data = await response.json();
  const userImage = document.getElementById("myImage");
  userImage.setAttribute("src", data.data.avatar);
  const userName = document.getElementById("yourName");
  const userEmail = document.getElementById("yourEmail");
  userName.innerHTML = data.data.name;
  userEmail.innerHTML = data.data.email;
  console.log(data);
}
fetchData();
