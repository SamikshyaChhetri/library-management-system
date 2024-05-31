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
  if (!bookPrice) {
    const bkprice = document.getElementById("price");
    bkprice.style.border = "1.2px solid red";
  } else {
    // toast("Book added successfully", "green");
    // removetoast();
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
    if (response.status == 201) {
      toast("Book added successfully", "green");
      removetoast();
    } else {
      toast("Error occured", "red");
      removetoast();
    }
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
// ? what?  nothing, sakkyo yesko? hera na tmle kei nasakkeko vaye, herdai xu ekxin
// xau? yass   yesto ni gara na, ek choti book add vayesi page khali garaideu na, reload garaide ni hunxa
//aile kasto xa ra??, aaile boook aad vayesi toast ta dekhauxa, tara input ma field ma haleko jsta ko testaii hunxa k, arko add garna ko lagi khali gardine hola ni ta? eaaa testa
