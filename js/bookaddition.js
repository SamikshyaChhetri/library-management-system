const submitBooks = document.getElementById("btn");
submitBooks.addEventListener("click", () => {
  const bookname = document.getElementById("bookTitle").value;
  const authorName = document.getElementById("author").value;
  const bookPage = document.getElementById("page").value;
  const bookPrice = document.getElementById("price").value;
  const dataPass = {
    title: bookname,
    author: authorName,
    pages: bookPage,
    price: bookPrice,
  };
});
