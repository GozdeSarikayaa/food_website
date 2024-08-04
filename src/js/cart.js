document.addEventListener('DOMContentLoaded', loadCart);

function loadCart() {
    // localStorage'dan sepet verilerini al
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Sepet liste öğesini seç
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; // Önceki içeriği temizle

    // Sepet boşsa, mesaj göster
    if (cartItems.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Sepetiniz boş.';
        cartList.appendChild(li);
    } else {
        // Sepetteki her ürün için liste öğesi oluştur ve ekle
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} TL`;
            cartList.appendChild(li);
        });
    }
}
