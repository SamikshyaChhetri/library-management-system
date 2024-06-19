const title = document.getElementById("title");
title.addEventListener("click", () => {
  const displayText = document.getElementById("loginRegister");
  const wrapdisplay = document.getElementById("wrapAll");
  // Check current display style
  if (displayText.style.display == "none") {
    // If currently hidden, show the element
    displayText.style.display = "flex";
    title.style.border = "none";
    document.getElementById("icon1").style.transform = "rotate(180deg)";
    wrapdisplay.style.transition = "0.3s ease-in-out";
    wrapdisplay.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
  } else {
    // If currently shown, hide the element
    displayText.style.display = "none";
    wrapdisplay.style.transition = "0.3s ease-in-out";

    document.getElementById("icon1").style.transform = "rotate(0deg)";
    wrapdisplay.style.boxShadow = "none";
    title.style.borderBottom = "1px solid rgba(24, 24, 24, 0.32)";
  }
});
const title2 = document.getElementById("title2");
title2.addEventListener("click", () => {
  const displayText = document.getElementById("displayafterLogin");
  const wrapdisplay = document.getElementById("afterLogin");
  // Check current display style
  if (displayText.style.display == "none") {
    // If currently hidden, show the element
    document.getElementById("icon2").style.transform = "rotate(180deg)";
    wrapdisplay.style.transition = "0.5s ease-in-out";
    title2.style.border = "none";

    displayText.style.display = "flex";
    wrapdisplay.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
  } else {
    // If currently shown, hide the element
    displayText.style.display = "none";
    wrapdisplay.style.boxShadow = "none";
    document.getElementById("icon2").style.transform = "rotate(0deg)";
    wrapdisplay.style.transition = "0.5s ease-in-out";
    title2.style.borderBottom = "1px solid rgba(24, 24, 24, 0.32)";
  }
});
const title3 = document.getElementById("title3");
title3.addEventListener("click", () => {
  const displayText = document.getElementById("profile");
  const wrapdisplay = document.getElementById("wrapprofile");
  // Check current display style
  if (displayText.style.display == "none") {
    // If currently hidden, show the element
    displayText.style.display = "flex";
    wrapdisplay.style.transition = "0.5s ease-in-out";
    title3.style.border = "none";

    wrapdisplay.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
    document.getElementById("icon3").style.transform = "rotate(180deg)";
  } else {
    // If currently shown, hide the element
    displayText.style.display = "none";
    wrapdisplay.style.boxShadow = "none";
    wrapdisplay.style.transition = "0.5s ease-in-out";
    document.getElementById("icon3").style.transform = "rotate(0deg)";
    title3.style.borderBottom = "1px solid rgba(24, 24, 24, 0.32)";
  }
});
