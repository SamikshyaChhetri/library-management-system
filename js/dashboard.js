const arr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
setInterval(() => {
  const element = document.getElementById("time");
  let curr_date = new Date();
  let month = curr_date.getMonth();
  let date = curr_date.getDate();
  let year = curr_date.getFullYear();
  let day = curr_date.getDay();
  let hours = curr_date.getHours();
  let min = curr_date.getMinutes();
  element.innerHTML =
    arr[month] +
    " " +
    date +
    ", " +
    year +
    " " +
    week[day] +
    " " +
    hours +
    ":" +
    min;
}, 1000);

const getUserData = async () => {
  const response = await fetch("https://lms.sachetsubedi001.com.np/api/users");
  const displayUserList = document.getElementById("tableBody");
  const userData = await response.json();
  // console.log(userData);
  const sliceUserData = userData.data.slice(0, 7);
  console.log(sliceUserData);
  sliceUserData.forEach((user) => {
    displayUserList.innerHTML += `
    <tr>
        <td class="userNameAvatar"> 
        <img src=${user.avatar}>
        ${user.name}</td>
        <td>${user.email}</td>
      </tr>
    `;
  });
};
getUserData();
const getData = async () => {
  const response = await fetch("https://lms.sachetsubedi001.com.np/api/books");
  const displayBooks = document.getElementById("tableBody2");

  const data = await response.json();
  const slicedDatas = data.data.slice(0, 9);

  slicedDatas.forEach((a) => {
    displayBooks.innerHTML += `
      <tr>
        <td>${a.title}</td>
        <td>${a.author}</td>
        <td>${a.available}</td>
        <td>${a.pages}</td>

      </tr>
      `;
  });
};
getData();
const tokenFromLocalstorage = localStorage.getItem("token");
if (!tokenFromLocalstorage) {
  window.location.href = "../pages/login.html";
}
async function fetchData() {
  useridfromlocalstorage = localStorage.getItem("userid");
  console.log(useridfromlocalstorage);
  const response = await fetch(
    "Https://lms.sachetsubedi001.com.np/api/auth/user/" +
      useridfromlocalstorage,
    {
      method: "get",
    }
  );
  const data = await response.json();
  const userName = document.getElementById("yourName");
  const userImage = document.getElementById("myImage");
  userImage.setAttribute("src", data.data.avatar);
  userName.innerHTML = data.data.name;
  console.log(data);
}
fetchData();
const addBooks = document.getElementById("addBook");
addBooks.addEventListener("click", () => {
  window.location.href = "../pages/bookaddition.html";
});
document.getElementById("seeMorebooks").addEventListener("click", () => {
  window.location.href = "../pages/seeMoreBooks.html";
});

// Dropdown menu handler
const userlogo = document.getElementById("myImage");
userlogo.addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  if (menu.style.display == "none") {
    // userlogo.style.color = "blueviolet";
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
    // userlogo.style.color = "black";
  }
});

// Dropdown close button handler
document.getElementById("cross").addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  const userlogo = document.getElementById("userlogo");
  menu.style.display = "none";
  // userlogo.style.color = "black";
});
// Logout handler
const logOut = document.getElementById("logout");
logOut.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "../pages/login.html";
});
const gotoprofile = document
  .getElementById("profile")
  .addEventListener("click", () => {
    window.location.href = "../pages/profile.html";
  });
