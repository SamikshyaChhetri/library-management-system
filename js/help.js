document.getElementById("icon1").addEventListener("click", () => {
  const displayText = document.getElementById("loginRegister");
  const wrapdisplay = document.getElementById("wrapAll");
  // Check current display style
  if (displayText.style.display == "none") {
    // If currently hidden, show the element
    displayText.style.display = "flex";
    wrapdisplay.style.transition = "0.3s ease-in-out";
    wrapdisplay.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
  } else {
    // If currently shown, hide the element
    displayText.style.display = "none";
    wrapdisplay.style.boxShadow = "none";
    wrapdisplay.style.transition = "0.3s ease-in-out";
  }
});
