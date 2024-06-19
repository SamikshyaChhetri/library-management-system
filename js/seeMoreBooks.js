const getData = async () => {
  // Fetch the books to display in the page
  const response = await fetch("https://lms.sachetsubedi001.com.np/api/books");
  // Get the data from the response
  const data = await response.json();

  // Get the books container to add books to
  const bookCardsContainer = document.getElementById("bookCards");

  // Iteratate through all books and add them to the bookCardsContainer
  data.data.forEach((a) => {
    // console.log(a);
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

  // Get all the book cards so that sabai ma event listner rakhera thichda modal tala lyauna paiyos
  const display = document.querySelectorAll(".bookCard");
  const displayDetails = document.getElementById("wrapContent");
  const titleName = document.getElementById("titleName");
  const authorName = document.getElementById("authorName");
  const availableBooks = document.getElementById("available");

  // Iterate through every book cards to add event listner
  display.forEach((item) => {
    item.addEventListener("click", async () => {
      //add the event listner to each cards

      // Show the display modal
      const scrolledHeight = window.scrollY;
      console.log(scrolledHeight);
      displayDetails.style.top = scrolledHeight + 350 + "px";

      // Get the book id to send to backend to get the book details and show in the modal
      const bookID = item.getAttribute("data-id");

      // Add the book id to the local storage for future use
      localStorage.setItem("bookId", bookID);

      // Get the book details from api
      const response = await fetch(
        "https://lms.sachetsubedi001.com.np/api/books/" + bookID
      );
      const data = await response.json();

      console.log(data);
      // set the book details in the modal
      titleName.innerHTML = data.data.title;
      authorName.innerHTML = data.data.author;
      availableBooks.innerHTML = data.data.available + " " + "Available";
    });
  });

  // Cancel button handler
  document.getElementById("cancel").addEventListener("click", () => {
    displayDetails.style.top = "-100vh";
  });
};

getData();

//Book reservation part

// Get the reserve button of the view book modal
const reserveBook = document.getElementById("reserve");
reserveBook.addEventListener("click", async () => {
  // On click on the reserve button, get the userId and bookId from local storage from localStorage
  reserveBook.innerHTML = "Creating a Reservation..";
  const userIdFromLocalstorage = localStorage.getItem("userid");
  const bookIdFromLocalstorage = localStorage.getItem("bookId");
  const displayDetails = document.getElementById("wrapContent");

  // Create a request body object to send to teh backend
  const data_pass = {
    userId: userIdFromLocalstorage,
    bookId: bookIdFromLocalstorage,
  };

  // send user id and book id to reserve the crresponding book by the user
  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/reservations/",
    {
      method: "post",
      body: JSON.stringify(data_pass),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  // console.log(data);
  console.log(response.status);
  if (response.status == 201) {
    toast("Book reservation created successfully", "limegreen");
    removetoast();
    reserveBook.innerHTML = "Reserve";
    setTimeout(() => {
      displayDetails.style.top = "-100vh";
    }, 1000);
  } else if (response.status == 400) {
    toast("Book already reserved", "red");
    removetoast();

    reserveBook.innerHTML = "Reserve";
    setTimeout(() => {
      displayDetails.style.top = "-100vh";
    }, 1000);
  } else {
    toast("Server Error", "red");
    removetoast();

    reserveBook.innerHTML = "Reserve";
    setTimeout(() => {
      displayDetails.style.top = "-100vh";
    }, 1000);
  }
});
// Check if the user is logged in or not
const tokenFromLocalstorage = localStorage.getItem("token");
if (!tokenFromLocalstorage) {
  window.location.href = "../pages/login.html";
}
async function fetchData() {
  useridfromlocalstorage = localStorage.getItem("userid");
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
