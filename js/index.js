// index.js

// Sayfa yüklendiğinde çalışacak olan kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Her sipariş ver butonunu seçiyoruz
    
    const orderButton2 = document.getElementById('orderButton2');

    

    orderButton2.addEventListener('click', function() {
        // Sipariş ver butonuna tıklandığında yapılacak işlemler
        window.location.href = 'siparis2.html'; // İlgili sayfaya yönlendirme
    });
});
