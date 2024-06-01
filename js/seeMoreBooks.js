const getData = async () => {
  const response = await fetch("https://lms.sachetsubedi001.com.np/api/books");
  const displayBooks = document.getElementById("tableBody2");

  const data = await response.json();
  const slicedDatas = data.data.slice(0, 6);

  slicedDatas.forEach((a) => {
    displayBooks.innerHTML += `
        <tr>
          <td>${a.id}</td>
          <td>${a.title}</td>
          <td>${a.author}</td>
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
  userName.innerHTML = data.data.name;
  console.log(data);
}
fetchData();
const addBooks = document.getElementById("addBook");
addBooks.addEventListener("click", () => {
  window.location.href = "../pages/bookaddition.html";
});
