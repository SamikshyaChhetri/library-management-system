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
    bookIssued: "Artificial Intelligence: A Modern Approach",
    department: "AI Research",
  },
  {
    userId: 5,
    userName: "Eve Davis",
    bookIssued: "Data Science for Business",
    department: "Data Science",
  },
];
const display = document.getElementById("disp");
people.forEach((a) => {
  console.log(a.userId);
  console.log(a.userName);
  console.log(a.department);
});
