const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);

function displayLibrary() {
  const container = document.querySelector("#Library_container");
  container.textContent = "";

  for (const book of myLibrary) {
    let card = document.createElement("div");
    card.classList.add("book-card");

    let title = document.createElement("h1");
    title.textContent = `${book.title}`;

    let author = document.createElement("p");
    author.textContent = `${book.author}`;

    let pages = document.createElement("p");
    pages.textContent = `${book.pages}`;

    let status = document.createElement("div");
    status.classList.add("status-container");

    let label = document.createElement("label");
    let readStatus = book.read ? "Read" : "Not Read Yet";
    label.textContent = `${readStatus}`;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    book.read ? (checkbox.checked = true) : (checkbox.checked = false);

    status.append(label, checkbox);
    card.append(title, author, pages, status);
    container.appendChild(card);
  }
}
displayLibrary();
const dialog = document.querySelector("#bookDialog");
const openModalBtn = document.querySelector("#addBookBtn");
const cancelBtn = document.querySelector("#closeDialog");

openModalBtn.addEventListener("click", () => {
  document.querySelector('form').reset();
  dialog.showModal();
});
cancelBtn.addEventListener("click", () => {
  dialog.close();
});