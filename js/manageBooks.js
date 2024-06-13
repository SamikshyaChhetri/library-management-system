const reservedBooks = async () => {
  useridfromlocalstorage = localStorage.getItem("userid");

  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/reservations/user/" +
      useridfromlocalstorage
  );
  const data = await response.json();
  //   console.log(data.data);
  const displayReservedBooks = document.getElementById("booksContainer");
  data.data.forEach((element) => {
    // console.log(element);
    displayReservedBooks.innerHTML += `
          <div class="book">
        <div class="manageBooks">
          <div class="book1"> ${element.book.title}</div>
          <div class="reserveDate">${element.createdAt}</div>
        </div>
        <div class="return" data-id=${element.id}>Return</div>
      </div>
          `;
  });

  //Returning book part

  const returnBookButton = document.querySelectorAll(".return");
  returnBookButton.forEach((item) => {
    item.addEventListener("click", async (e) => {
      const returnBookId = e.target.getAttribute("data-id");
      const data_pass = {};

      console.log(returnBookId);

      const response = await fetch(
        "https://lms.sachetsubedi001.com.np/api/reservations/" + returnBookId,
        {
          method: "Delete",
          body: JSON.stringify(data_pass),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      toast("Returning Book", "green");
      location.reload();
      console.log(data);
    });
  });
};
reservedBooks();
