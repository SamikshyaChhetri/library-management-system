function toast(a, color) {
  const toastMessage = document.getElementById("toast");
  toastMessage.style.top = "10px";
  toastMessage.innerHTML = a;
  toastMessage.style.transition = "top 0.2s ease-in-out";
  toastMessage.style.backgroundColor = color;
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
  console.log(typeof Number(bookPage));
  const response = await fetch("https://lms.sachetsubedi001.com.np/api/books", {
    method: "post",
    body: JSON.stringify(dataPass),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(typeof data);
  console.log(data);
  console.log(response.status);
  if (response.status == 201) {
    toast("Book added successfully", "green");
  }
});
