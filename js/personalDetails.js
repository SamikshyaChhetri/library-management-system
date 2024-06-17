document.getElementById("saveChanges").addEventListener("click", async (e) => {
  e.preventDefault();
  const fullName = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phoneNum").value;
  const streetName = document.getElementById("street").value;
  const apartmentName = document.getElementById("apartment").value;
  const cityName = document.getElementById("city").value;
  const stateName = document.getElementById("state").value;
  const zipCode = document.getElementById("zipcode").value;
  const countryName = document.getElementById("countryId").value;
  const useridfromlocalstorage = localStorage.getItem("userid");
  console.log(useridfromlocalstorage);
  const dataPass = {
    id: useridfromlocalstorage,
    name: fullName,
    phone: phoneNumber,
    apartment: apartmentName,
    city: cityName,
    street: streetName,
    state: stateName,
    zip: zipCode,
    country: countryName,
  };
  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/users/",
    {
      method: "PATCH",
      body: JSON.stringify(dataPass),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
});
