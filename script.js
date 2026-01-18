const myLibrary = [];
class Book {

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }

}
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.id = crypto.randomUUID();
// }
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
function displayLibrary() {
  const container = document.querySelector("#Library_container");
  container.textContent = "";

  for (const book of myLibrary) {
    let card = document.createElement("div");
    card.classList.add("book-card");

    let title = document.createElement("h1");
    title.textContent = `${book.title}`;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove");
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayLibrary();
    });

    let author = document.createElement("p");
    author.textContent = `${book.author}`;

    let pages = document.createElement("p");
    pages.textContent = `${book.pages}`;

    let status = document.createElement("div");
    status.classList.add("status-container");

    let label = document.createElement("label");
    let readStatus = book.read ? "Read" : "Not Read Yet";
    label.textContent = `${readStatus}`;

    let changeCheckbtn = document.createElement("button");
    changeCheckbtn.classList.add("change");
    changeCheckbtn.textContent = "Change Status"
    changeCheckbtn.addEventListener("click", () => {
      label.textContent == "Read"
        ? label.textContent = "Not Read Yet"
        : label.textContent = "Read"
    });

    status.append(label, changeCheckbtn);
    card.append(title, author, pages, status, removeBtn);
    container.appendChild(card);
  }
}
displayLibrary();
const dialog = document.querySelector("#bookDialog");
const openModalBtn = document.querySelector("#addBookBtn");
const cancelBtn = document.querySelector("#closeDialog");
const submitBtn = document.querySelector("#submitBook");

openModalBtn.addEventListener("click", () => {
  document.querySelector('form').reset();
  dialog.showModal();
});
cancelBtn.addEventListener("click", () => {
  dialog.close();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    document.querySelector("#pages").value,
    document.querySelector("#read").checked
  );
  displayLibrary();
  dialog.close();
});

/** 
 * what i want to do is simple 
 * take all the constructors and modify them to classes instead
 * what are the constructors
 * book
 * 
 */
