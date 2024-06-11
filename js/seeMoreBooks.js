const getData = async () => {
  const response = await fetch("https://lms.sachetsubedi001.com.np/api/books");
  const bookCardsContainer = document.getElementById("bookCards");
  const data = await response.json();
  data.data.forEach((a) => {
    console.log(a);
    bookCardsContainer.innerHTML += `
    <div class="bookCard" data-id=${a.id} > 
    <div class="wrapDetails">
    
    <img src="../images/book.png!f305cw" alt="" class="book">
    
    <div class="at">${a.title}</div>
    <div class="aa">${a.author}</div>
    </div>
    <div class="ap">${a.pages}</div>
    </div>
    </div>   
    `;
  });
  const display = document.querySelectorAll(".bookCard");
  const displayDetails = document.getElementById("wrapContent");

  // const authorName = document.getElementById("authorName");
  display.forEach((item) => {
    item.addEventListener("click", async () => {
      // titleName.innerHTML = "title";
      // authorName.innerHTML = "author";
      displayDetails.style.top = "50%";

      const response = await fetch(
        "https://lms.sachetsubedi001.com.np/api/books/"
      );
    });
  });
  const cancel = document
    .getElementById("cancel")
    .addEventListener("click", () => {
      displayDetails.style.top = "-100vh";
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
  console.log(data);
}
fetchData();
const addBooks = document.getElementById("addBook");
addBooks.addEventListener("click", () => {
  window.location.href = "../pages/bookaddition.html";
});
