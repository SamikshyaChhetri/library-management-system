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
  const bookname = document.getElementById("bookTitle").value;
  const authorName = document.getElementById("author").value;
  const bookPage = document.getElementById("page").value;
  const bookPrice = document.getElementById("price").value;

  const dataPass = {
    title: bookname,
    author: authorName,
    pages: Number(bookPage),
    price: Number(bookPrice),
  };
  if (!bookname && !authorName && !bookPage && !bookPrice) {
    toast("Cannot add empty value ", "red");

    removetoast();
  } else if (!bookname) {
    const bkname = document.getElementById("bookTitle");
    bkname.style.border = "1.2px solid red";
    removeBorder("1.2px solid blueviolet");

    // toast("Enter the Title", "red");
    // removetoast();
  } else if (!authorName) {
    const authName = document.getElementById("author");
    authName.style.border = "1.2px solid red";
    removeBorder("1.2px solid blueviolet");

    // toast("Enter Author name", "red");
    // removetoast();
  } else if (!bookPage) {
    const bkpage = document.getElementById("page");
    bkpage.style.border = "1.2px solid red";
    removeBorder("1.2px solid blueviolet");

    // toast("Enter bookpage", "red");
    // removetoast();
  } else if (!bookPrice) {
    const bkprice = document.getElementById("price");
    bkprice.style.border = "1.2px solid red";
    removeBorder("1.2px solid blueviolet");

    // toast("Enter bookprice");
    // removetoast();
  } else {
    toast("Book added successfully", "green");
    removetoast();
    console.log(typeof Number(bookPage));
    const response = await fetch(
      "https://lms.sachetsubedi001.com.np/api/books",
      {
        method: "post",
        body: JSON.stringify(dataPass),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  // console.log(response.status);
  // if (response.status == 201) {
  //   toast("Book added successfully", "green");
  //   removetoast();
  // } else if (
  //   bookname === "" ||
  //   authorName === "" ||
  //   bookPage === "" ||
  //   bookPrice === ""
  // ) {
  //   toast("Invalid", "red");
  // }
});
