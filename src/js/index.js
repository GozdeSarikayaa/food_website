function addItemToCart(name, price) {
    // Yeni bir ürün objesi oluşturuyoruz
    const newItem = { name, price };
    
    // Sepet bilgilerini localStorage'a ekliyoruz
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Kullanıcıya bilgi vermek için alert kullanabilirsiniz
    alert(`${name} sepete eklendi!`);
}

module.exports = {
    theme: {
      extend: {
        colors: {
          'custom-pink': '#e91e63', // Bordomsu pembe renginizi buraya girin
        },
      },
    },
    variants: {},
    plugins: [],
  };
  