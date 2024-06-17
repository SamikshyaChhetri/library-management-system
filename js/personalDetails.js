const fullName = document.getElementById("name").value;
const phoneNumber = document.getElementById("phoneNum").value;
const emailName = document.getElementById("email").value;
const apartmentName = document.getElementById("apartment").value;
const cityName = document.getElementById("city").value;
const stateName = document.getElementById("state").value;
const zipCode = document.getElementById("zipcode").value;
const countryName = document.getElementById("countryId").value;
const useridfromlocalstorage = localStorage.getItem("userid");
const saveChanges = document.getElementById("saveChanges");
document.getElementById("saveChanges").addEventListener("click", async (e) => {
  e.preventDefault();
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
  console.log(response.status);
  if (response.status == 201) {
    toast("Successfully Updated", "limegreen");
    removetoast();
    saveChanges.innerHTML = "Save changes";
  } else if (response.status == 400) {
    toast("User not found", "red");
    removetoast();
    saveChanges.innerHTML = "Save changes";
  } else {
    toast("Server Error", "red");
    removetoast();
    saveChanges.innerHTML = "Save changes";
  }

  // console.log(data);
});
