const reservedBooks = async () => {
  useridfromlocalstorage = localStorage.getItem("userid");

  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/reservations/user/" +
      useridfromlocalstorage
  );
  const data = await response.json();
  console.log(data.data);
  const displayReservedBooks = document.getElementById("book");
  data.data.forEach((element) => {
    displayReservedBooks.innerHTML += `
          <tr>
            <td>${element.book.author}</td>
          </tr>
          `;
  });
};
reservedBooks();
