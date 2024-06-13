function toast(a, color) {
  const toastMessage = document.getElementById("toast");
  const scrollHeight = window.scrollY;
  if (scrollHeight >= 0) {
    toastMessage.style.top = scrollHeight + 10 + "px";
  }
  toastMessage.innerHTML = a;
  toastMessage.style.transition = "top 0.2s ease-in-out";
  toastMessage.style.backgroundColor = color;
}
function removetoast() {
  setTimeout(() => {
    const toastMessage = document.getElementById("toast");
    toastMessage.style.top = "-50px";
  }, 2000);
  const displayDetails = document.getElementById("wrapContent");
  displayDetails.style.top = "-100vh";
}
