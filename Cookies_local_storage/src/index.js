const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Check for sessionStorage support
if (typeof Storage === "undefined") {
    alert(
        "Sorry, your browser does not support Web storage. Try again with a better one"
    );
} else {
    createStore();
    displayCart();
}

function addItemToCart(item) {
    sessionStorage.setItem(item, true);
    displayCart();
}

function createStore() {
    const storeDiv = document.getElementById("store");
    const ul = document.createElement("ul");
    availableItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.onclick = () => addItemToCart(item);
        ul.appendChild(li);
    });
    storeDiv.appendChild(ul);
}

function displayCart() {
    const itemsInCart = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (availableItems.includes(key)) {
            itemsInCart.push(key);
        }
    }
    let cartMessage = document.getElementById("cart-message");
    if (!cartMessage) {
        cartMessage = document.createElement("p");
        cartMessage.id = "cart-message";
        document.body.appendChild(cartMessage);
    }
    if (itemsInCart.length > 0) {
        cartMessage.textContent = `You previously had ${itemsInCart.length} items in your cart`;
    } else {
        cartMessage.textContent = "";
    }
}

window.addItemToCart = addItemToCart;
window.createStore = createStore;
window.displayCart = displayCart;