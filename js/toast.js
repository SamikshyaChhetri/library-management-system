function toast(a, color) {
  const toastMessage = document.getElementById("toast"); // yah hera k lai gareuxau
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
    const toastMessage = document.getElementById("toast"); // yai xa ta
    toastMessage.style.top = "-100vh"; // jabo 50x dine hora vanyavh
  }, 2000);
}
