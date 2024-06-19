const useridfromlocalstorage = localStorage.getItem("userid");
const fetchData = async () => {
  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/auth/user/" + useridfromlocalstorage
  );
  const data = await response.json();
  console.log(data);
  document.getElementById("name").value = data.data.name;
  document.getElementById("phoneNum").value = data.data.phone;
  document.getElementById("email").value = data.data.email;
  document.getElementById("apartment").value = data.data.apartment;
  document.getElementById("city").value = data.data.city;
  document.getElementById("state").value = data.data.state;
  document.getElementById("zipcode").value = data.data.zip;
  document.getElementById("countryId").value = data.data.country;
  const userImage = document.getElementById("avatarimg"); // tei image tag lai grab garera tesko src haleko
  userImage.setAttribute("src", data.data.avatar); // yah bata
};
fetchData();

document.getElementById("updateBtn").addEventListener("click", () => {
  const displayContainer = document.getElementById("wrapfile");
  displayContainer.style.top = "1.5em";
  document.getElementById("cancel").addEventListener("click", () => {
    displayContainer.style.top = "-100em";
  });

  const saveButton = document.getElementById("savebtn");
  saveButton.addEventListener("click", async () => {
    saveButton.innerHTML = "Saving..";
    const avatarInput = document.getElementById("avatarContainer");
    console.log(avatarInput.files);
    const newForm = new FormData();
    newForm.append("avatar", avatarInput.files[0]);
    newForm.append("id", useridfromlocalstorage);
    const response = await fetch(
      "https://lms.sachetsubedi001.com.np/api/users/photo",
      {
        method: "POST",
        body: newForm,
      }
    );
    console.log(await response.json());
    // setTimeout(() => {
    //   saveButton.innerHTML = "Save";
    // }, 4000);
    setTimeout(() => {
      window.location.reload();
    }, 5000);
    // setTimeout(() => {
    //   toast("Successfully Uploaded", "limegreen");
    // }, 6000);
    // saveButton.innerHTML = "Save";
  });
});

const saveChanges = document.getElementById("saveChanges");

saveChanges.addEventListener("click", async (e) => {
  e.preventDefault();
  const fullName = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phoneNum").value;
  const emailName = document.getElementById("email").value;
  const apartmentName = document.getElementById("apartment").value;
  const cityName = document.getElementById("city").value;
  const stateName = document.getElementById("state").value;
  const zipCode = document.getElementById("zipcode").value;
  const countryName = document.getElementById("countryId").value;
  if (fullName == "" && emailName == "") {
    toast("Please provide valid Name and Email", "red");
    removetoast();
  } else if (fullName == "") {
    toast("Please provide valid Name", "red");
    removetoast();
  } else if (emailName == "") {
    toast("Please provide valid Email", "red");
    removetoast();
  } else {
    saveChanges.innerHTML = "Updating...";
    const dataPass = {
      id: useridfromlocalstorage,
      name: fullName,
      phone: phoneNumber,
      apartment: apartmentName,
      email: emailName,
      city: cityName,
      state: stateName,
      zip: zipCode,
      country: countryName,
    };

    // console.log(dataPass);
    const response = await fetch(
      "https://lms.sachetsubedi001.com.np/api/users/update",
      {
        method: "POST",
        body: JSON.stringify(dataPass),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(response.status);
    if (response.status == 201) {
      toast("Successfully Updated", "limegreen");
      removetoast();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      saveChanges.innerHTML = "Update";
    } else if (response.status == 400) {
      toast("User not found", "red");
      removetoast();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      saveChanges.innerHTML = "Update";
    } else {
      toast("Server Error", "red");
      removetoast();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      saveChanges.innerHTML = "Update";
    }
  }
});
