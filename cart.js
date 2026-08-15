let cart = JSON.parse(localStorage.getItem("lumeaCart")) || [];

function saveCart() {
    localStorage.setItem("lumeaCart", JSON.stringify(cart));
}

function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart();

    alert(name + " has been added to your cart!");
}