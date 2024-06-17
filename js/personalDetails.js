const useridfromlocalstorage = localStorage.getItem("userid");
const fetchData = async () => {
  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/auth/user/" + useridfromlocalstorage
  );
  const data = await response.json();
  console.log(data); //herdai gara k k naam xa
  document.getElementById("name").value = data.data.name;
  document.getElementById("phoneNum").value = data.data.phone;
  document.getElementById("email").value = data.data.email;
  document.getElementById("apartment").value = data.data.apartment;
  document.getElementById("city").value = data.data.city;
  document.getElementById("state").value = data.data.state;
  document.getElementById("zipcode").value = data.data.zip;
  document.getElementById("countryId").value = data.data.country;
};

fetchData();

// mero id bata login gara ta, saab ko value aauxa
const fullName = document.getElementById("name").value;
const phoneNumber = document.getElementById("phoneNum").value;
const emailName = document.getElementById("email").value;
const apartmentName = document.getElementById("apartment").value;
const cityName = document.getElementById("city").value;
const stateName = document.getElementById("state").value;
const zipCode = document.getElementById("zipcode").value;
const countryName = document.getElementById("countryId").value;
const saveChanges = document.getElementById("saveChanges");
saveChanges.addEventListener("click", async (e) => {
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

  // console.log(data);
});
// gara aba yo, nindra lagyo malai ta xya malai ta kaha bata k garne thaha paina, yesto k, pahila log in gareko user ko details magne, tesma hamro form ma vako jati sabai details aauxa, ani ityo sabai yo form ham haldine so that tei ma edit garna milos api kun hota, postman ma xa khoja na, sabai vandiye vane jandainau timi list? list vabeko list dine ho, vaneko all user, retrive vaneko single user ko dine eaaaa retrive ho vanesi, yes, gara na ta, page load hune bittikai fetch huna pary, ani tyo input haru ma hallina paryo
