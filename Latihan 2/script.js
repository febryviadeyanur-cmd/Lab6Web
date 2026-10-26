// Latihan 2
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});
