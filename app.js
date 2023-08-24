// Get references to DOM elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

// Add event listener to the button
btn.addEventListener("click", function (e) {
  e.preventDefault();

  // Check if all input fields are empty
  if (title.value === "" && author.value === "" && year.value === "") {
    alert("Fill The Form");
  } else {
    // Create a new row (section element)
    const newRow = document.createElement("section");
    newRow.classList.add("book-entry");

    // Create new elements for Title, Author, and Year
    const newTitle = createNewElement("div", "book-title", title.value);
    const newAuthor = createNewElement("div", "book-author", author.value);
    const newYear = createNewElement("div", "book-year", year.value);

    // Append elements to the new row
    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newYear);

    // Append the new row to the book list
    bookList.appendChild(newRow);

    // Clear input fields after adding
    title.value = "";
    author.value = "";
    year.value = "";
  }
});

// Function to create a new element with a class and innerHTML
function createNewElement(tagName, className, innerHTML) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.innerHTML = innerHTML;
  return element;
}








// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const year = document.getElementById("year");
// const bookList = document.getElementById("book-list");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (title.value == "" && author.value == "" && year.value == "") {
//     alert("Fill The Form");
//   } else {
//     const newRow = document.createElement("section");

//     // Creating new Title
//     const newTitle = document.createElement("div");
//     newTitle.innerHTML = title.value;
//     newRow.appendChild(newTitle);

//     // Creating new Author
//     const newAuthor = document.createElement("div");
//     newAuthor.innerHTML = author.value;
//     newRow.append(newAuthor);

//     // Creating new Year
//     const newYear = document.createElement("div");
//     newYear.innerHTML = year.value;
//     newRow.appendChild(newYear);

//     bookList.appendChild(newRow);
//   }
// });
