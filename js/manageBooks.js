const reservedBooks = async () => {
  useridfromlocalstorage = localStorage.getItem("userid");

  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/reservations/user/" +
      useridfromlocalstorage
  );
  const data = await response.json();
  console.log(data.data);
  const displayReservedBooks = document.getElementById("booksContainer");
  data.data.forEach((element) => {
    console.log(element);
    displayReservedBooks.innerHTML += `
          <div class="book">
        <div class="manageBooks">
          <div class="book1"> ${element.book.title}</div>
          <div class="reserveDate">Date of reservation</div>
        </div>
        <div class="return">Return</div>
      </div>
          `;
  });
};
reservedBooks();
//hawaaaaaaaaaaa sabai ko name tassera aaira xa ani aautai jsto dekheko
