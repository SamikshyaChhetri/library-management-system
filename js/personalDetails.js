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
  const dataPass = {
    name: fullName,
    phone: phoneNumber,
    apartment: apartmentName,
    city: cityName,
    state: stateName,
    zip: zipCode,
    countrt: countryName,
  };
  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/users/",
    {
      method: "patch",
      body: JSON.stringify(dataPass),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
});
