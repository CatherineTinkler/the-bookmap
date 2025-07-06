
function filterBooks() {
    const selectedPlace = document.getElementById("place-select").value;
    const books = document.querySelectorAll(".book");
    
    books.forEach(book => {
        book.style.display = selectedPlace === "" || book.getAttribute("data-place") === selectedPlace ? "block" : "none";
    });
}
