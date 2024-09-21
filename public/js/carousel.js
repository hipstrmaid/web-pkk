const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        items[currentIndex].classList.remove('active'); // Hapus class active dari slide saat ini
        currentIndex = (currentIndex + 1) % items.length; // Ganti indeks slide
        items[currentIndex].classList.add('active'); // Tambah class active ke slide berikutnya
    }

    setInterval(showNextSlide, 5000); // Ganti slide setiap 3 detik
