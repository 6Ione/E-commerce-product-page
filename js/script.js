const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener("click", () => {
        mainImage.src = thumbnail.dataset.full;
        thumbnails.forEach(img => img.classList.remove("active"));
        thumbnail.classList.add("active");
    });

});

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const quantityDisplay = document.getElementById("quantity");

let quantity = 0;

plus.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});

minus.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

const cartButton = document.getElementById("cartButton");

let cart = 0;

cartButton.addEventListener("click", () => {
    if (quantity === 0) {
        alert("Select a quantity.");
        return;
    }

    cart += quantity;
    alert(`${quantity} item(s) added to cart!`);

    quantity = 0;
    quantityDisplay.textContent = quantity;
});