const reservedBooks = async () => {
  useridfromlocalstorage = localStorage.getItem("userid");

  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/reservations/user/" +
      useridfromlocalstorage
  );
  const data = await response.json();
  console.log(data);
  const displayReservedBooks = document.getElementById("book");
  data.forEach((element) => {
    displayReservedBooks.innerHTML += `
          <tr>
            <td>${element.title}</td>
          </tr>
          `;
  });
};
reservedBooks();
