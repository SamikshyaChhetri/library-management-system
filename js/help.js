const icon1 = document.getElementById("icon1");
icon1.addEventListener("click", () => {
  const displayText = document.getElementById("loginRegister");
  const wrapdisplay = document.getElementById("wrapAll");
  // Check current display style
  if (displayText.style.display == "none") {
    // If currently hidden, show the element
    displayText.style.display = "flex";
    icon1.style.transform = "rotate(180deg)";
    wrapdisplay.style.transition = "0.5s ease-in-out";

    wrapdisplay.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
  } else {
    // If currently shown, hide the element
    displayText.style.display = "none";
    wrapdisplay.style.transition = "0.5s ease-in-out";

    icon1.style.transform = "rotate(0deg)";
    wrapdisplay.style.boxShadow = "none";
  }
});
const icon2 = document.getElementById("icon2");
icon2.addEventListener("click", () => {
  const displayText = document.getElementById("displayafterLogin");
  const wrapdisplay = document.getElementById("afterLogin");
  // Check current display style
  if (displayText.style.display == "none") {
    // If currently hidden, show the element
    icon2.style.transform = "rotate(180deg)";
    wrapdisplay.style.transition = "0.5s ease-in-out";

    displayText.style.display = "flex";
    wrapdisplay.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
  } else {
    // If currently shown, hide the element
    displayText.style.display = "none";
    wrapdisplay.style.boxShadow = "none";
    icon2.style.transform = "rotate(0deg)";
    wrapdisplay.style.transition = "0.5s ease-in-out";
  }
});
const icon3 = document.getElementById("icon3");
icon3.addEventListener("click", () => {
  const displayText = document.getElementById("profile");
  const wrapdisplay = document.getElementById("wrapprofile");
  // Check current display style
  if (displayText.style.display == "none") {
    // If currently hidden, show the element
    displayText.style.display = "flex";
    wrapdisplay.style.transition = "0.5s ease-in-out";
    wrapdisplay.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
    icon3.style.transform = "rotate(180deg)";
  } else {
    // If currently shown, hide the element
    displayText.style.display = "none";
    wrapdisplay.style.boxShadow = "none";
    wrapdisplay.style.transition = "0.5s ease-in-out";
    icon3.style.transform = "rotate(0deg)";
  }
});
