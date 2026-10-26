// Latihan 6
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const pesanTugas = document.getElementById("pesanTugas");
const daftarTugas = document.getElementById("daftarTugas");

tambahTugas.addEventListener("click", function () {
    const teksTugas = inputTugas.value.trim();

    if (teksTugas === "") {
        pesanTugas.textContent = "Tugas tidak boleh kosong.";
        return;
    }

    const itemTugas = document.createElement("li");
    const teks = document.createElement("span");
    const tombolSelesai = document.createElement("button");

    teks.textContent = teksTugas;
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.type = "button";

    tombolSelesai.addEventListener("click", function () {
        itemTugas.classList.toggle("selesai");

        if (itemTugas.classList.contains("selesai")) {
            tombolSelesai.textContent = "Batalkan selesai";
        } else {
            tombolSelesai.textContent = "Tandai selesai";
        }
    });

    itemTugas.appendChild(teks);
    itemTugas.appendChild(tombolSelesai);
    daftarTugas.appendChild(itemTugas);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas berhasil ditambahkan.";
});