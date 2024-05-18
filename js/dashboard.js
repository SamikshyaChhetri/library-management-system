arr = [
  "Jan",
  "Feb",
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
week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "thursday",
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
  let sec = curr_date.getSeconds();
  element.innerHTML =
    arr[month] +
    " " +
    date +
    ", " +
    year +
    " " +
    week[day - 1] +
    " " +
    hours +
    ":" +
    min;
}, 100);

const people = [
  {
    userId: 1,
    userName: "Alice Smith",
    bookIssued: "JavaScript: The Good Parts",
    department: "Computer Science",
  },
  {
    userId: 2,
    userName: "Bob Johnson",
    bookIssued: "Introduction to Algorithms",
    department: "Engineering",
  },
  {
    userId: 3,
    userName: "Charlie Brown",
    bookIssued: "Design Patterns",
    department: "Software Development",
  },
  {
    userId: 4,
    userName: "Diana Prince",
    bookIssued: "Artificial Intelligence",
    department: "AI Research",
  },
  {
    userId: 5,
    userName: "Eve Davis",
    bookIssued: "Data Science for Business",
    department: "Data Science",
  },
  {
    userId: 10,
    userName: "John Smith",
    bookIssued: "Introduction to Machine Learning",
    department: "Computer Science",
  },
];
const display = document.getElementById("tableBody");
people.forEach((person) => {
  display.innerHTML += `
        <tr>
          <td>${person.userId}</td>
          <td>${person.userName}</td>
          <td>${person.bookIssued}</td>
          <td>${person.department}</td>
        </tr>
      `;
});
const books = [
  {
    bookId: 101,
    bookTitle: "JavaScript: The Good Parts",
    bookAuthor: "Douglas Crockford",
    available: true,
  },
  {
    bookId: 102,
    bookTitle: "Introduction to Algorithms",
    bookAuthor: "Thomas H. Cormen",
    available: false,
  },
  {
    bookId: 103,
    bookTitle: "Design Patterns: Elements of Reusable Object-Oriented Software",
    bookAuthor: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    available: true,
  },
  {
    bookId: 104,
    bookTitle: "Artificial Intelligence: A Modern Approach",
    bookAuthor: "Stuart Russell, Peter Norvig",
    available: true,
  },
  {
    bookId: 105,
    bookTitle: "Data Science for Business",
    bookAuthor: "Foster Provost, Tom Fawcett",
    available: false,
  },
  // {
  //   bookId: 106,
  //   bookTitle: "Clean Code: A Handbook of Agile Software Craftsmanship",
  //   bookAuthor: "Robert C. Martin",
  //   available: true,
  // },
];
const displayBooks = document.getElementById("tableBody2");
books.forEach((a) => {
  displayBooks.innerHTML += `
  <tr>
    <td>${a.bookId}</td>
    <td>${a.bookTitle}</td>
    <td>${a.bookAuthor}</td>
    <td>${a.available}</td>
  </tr>
  `;
});
