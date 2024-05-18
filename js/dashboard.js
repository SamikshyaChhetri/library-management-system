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
