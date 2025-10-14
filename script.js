// Dapatkan elemen tombol berdasarkan ID
const ctaButton = document.getElementById('cta-button');

// Tambahkan event listener untuk merespon klik
ctaButton.addEventListener('click', function() {
    // Tampilkan pesan sederhana yang sesuai dengan tema
    alert('Akses Terkonfirmasi! Selamat datang di jaringan neon kami.');

    // Tambahkan efek visual sebentar pada tombol saat diklik (opsional)
    ctaButton.style.boxShadow = '0 0 30px white';
    setTimeout(() => {
        ctaButton.style.boxShadow = '0 0 15px var(--neon-pink)';
    }, 200);
});