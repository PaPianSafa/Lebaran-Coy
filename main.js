// countdown
// Target tanggal dan waktu Lebaran
const targetDate = new Date("April 10, 2024 00:00:00").getTime();

// Memperbarui countdown setiap satu detik
const countdown = setInterval(function () {
  // Dapatkan tanggal dan waktu sekarang
  const now = new Date().getTime();

  // Hitung selisih waktu antara sekarang dan target
  const distance = targetDate - now;

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasil dalam elemen HTML dengan id "countdown"
  document.getElementById(
    "countdown"
  ).innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik `;

  // Jika waktu sudah habis, hentikan countdown
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML =
      "Lebaran Coy, Mohon Maaf Lahir Dan Batin :)";
  }
}, 1000);
