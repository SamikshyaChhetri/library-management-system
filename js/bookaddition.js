function toast(a, color) {
  const toastMessage = document.getElementById("toast");
  toastMessage.style.top = "10px";
  toastMessage.innerHTML = a;
  toastMessage.style.transition = "top 0.2s ease-in-out";
  toastMessage.style.backgroundColor = color;
}
function removetoast() {
  setTimeout(() => {
    const toastMessage = document.getElementById("toast");
    toastMessage.style.top = "-50px";
  }, 4000);
}

const submitBooks = document.getElementById("btn");
submitBooks.addEventListener("click", async (e) => {
  e.preventDefault();
  const bookname = document.getElementById("bookTitle").value; //Get the title
  const authorName = document.getElementById("author").value; //Get the author
  const bookPage = document.getElementById("page").value; //Get the pages
  const bookAvailable = document.getElementById("price").value; //Get the available
  const isbn = document.getElementById("isbn").value;
  const description = document.getElementById("bookDescription").value;
  const bookImages = document.getElementById("bookImgg");
  if (!bookname && !authorName && !bookPage && !bookAvailable) {
    toast("Cannot add empty value ", "red");

    removetoast();
  }
  if (!bookname) {
    const bkname = document.getElementById("bookTitle");
    bkname.style.border = "1.2px solid red";
  }
  if (!authorName) {
    const authName = document.getElementById("author");
    authName.style.border = "1.2px solid red";
  }
  if (!bookPage) {
    const bkpage = document.getElementById("page");
    bkpage.style.border = "1.2px solid red";
  }
  if (!bookAvailable) {
    const bkprice = document.getElementById("price");
    bkprice.style.border = "1.2px solid red";
  } else {
    // Initialize a new form data
    const newForm = new FormData();
    // Append the values to the form
    newForm.append("attachment", bookImages.files[0]);
    newForm.append("title", bookname);
    newForm.append("author", authorName);
    newForm.append("pages", bookPage);
    newForm.append("available", bookAvailable);
    newForm.append("isbn", isbn);
    newForm.append("description", description);
    submitBooks.innerHTML = "Submitting";
    const response = await fetch(
      "https://lms.sachetsubedi001.com.np/api/books",
      {
        method: "post",
        // body: JSON.stringify(dataPass),
        body: newForm,
      }
    );
    const data = await response.json(); //check gara aba

    submitBooks.innerHTML = "Submit";
    if (response.status == 201) {
      toast("Book added successfully", "limegreen");
      removetoast();
    } else {
      toast("Error occured", "red");
      removetoast();
    }
    setTimeout(() => {
      location.reload();
    }, 1000);
    console.log(data);
  }
});
const bookdetail = document.querySelectorAll(".bookDetail"); // Grab all the elements with the corresponding class,(gives an array of elements)
// iterate through each element to add event listner
bookdetail.forEach((item) => {
  // listen to any change in the element and change the border to normal
  item.addEventListener("change", (e) => {
    e.target.style.border = "1.2px solid blueviolet";
  });
});
