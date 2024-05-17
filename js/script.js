const func = () => {
  const element = document.getElementById("wrap");
  const scrolledHeight = window.scrollY;
  if (scrolledHeight > 0) {
    element.style.boxShadow = " 0 2px 4px rgba(0, 0, 0, 0.1)";
  } else {
    element.style.boxShadow = "none";
  }
};
setInterval(func, 1);
