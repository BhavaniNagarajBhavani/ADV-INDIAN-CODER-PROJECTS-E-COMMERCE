const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');

let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(button.getAttribute('data-price'));

        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `${productName} - $${productPrice}`;
        cartItems.appendChild(cartItem);

        total += productPrice;
        cartTotal.textContent = total.toFixed(2);
    });
});

checkoutButton.addEventListener('click', () => {
    alert(`Total: $${total.toFixed(2)}\nThank you for your purchase!`);
    cartItems.innerHTML = '';
    cartTotal.textContent = '0';
    total = 0;
});

