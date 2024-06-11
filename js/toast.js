function toast(a, color) {
  const toastMessage = document.getElementById("toast");
  toastMessage.style.top = "10px";
  toastMessage.innerHTML = a;
  toastMessage.style.transition = "top 0.2s ease-in-out";
  toastMessage.style.backgroundColor = color;
}
function removetoast() {
  setTimeout(() => {
    const toastMessage = document.getElementById("toast");
    toastMessage.style.top = "-50px";
  }, 4000);
  const displayDetails = document.getElementById("wrapContent");

  displayDetails.style.top = "-100vh";
}
