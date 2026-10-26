//Mini Project
const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const errNama = document.getElementById("errNama");
const errEmail = document.getElementById("errEmail");
const errSesi = document.getElementById("errSesi");

const hitungNama = document.getElementById("hitungNama");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesan = document.getElementById("pesan");

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setStatus(input, errEl, teksError) {
    errEl.textContent = teksError;
    input.classList.toggle("invalid", teksError !== "");
    input.classList.toggle("valid", teksError === "");
    return teksError === "";
}

function validasiNama() {
    const nilai = nama.value.trim();
    if (nilai === "") return setStatus(nama, errNama, "Nama lengkap wajib diisi.");
    if (nilai.length < 3) return setStatus(nama, errNama, "Nama minimal 3 karakter.");
    return setStatus(nama, errNama, "");
}

function validasiEmail() {
    const nilai = email.value.trim();
    if (nilai === "") return setStatus(email, errEmail, "Email wajib diisi.");
    if (!polaEmail.test(nilai)) return setStatus(email, errEmail, "Masukkan alamat email yang valid.");
    return setStatus(email, errEmail, "");
}

function validasiSesi() {
    if (sesi.value === "") return setStatus(sesi, errSesi, "Silakan pilih sesi workshop.");
    return setStatus(sesi, errSesi, "");
}

nama.addEventListener("input", function () {
    hitungNama.textContent = nama.value.length + "/50 karakter";
    if (nama.classList.contains("invalid")) validasiNama();
});

email.addEventListener("input", function () {
    if (email.classList.contains("invalid")) validasiEmail();
});

sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        ringkasanSesi.textContent = "Sesi belum dipilih.";
    } else {
        ringkasanSesi.textContent = "Sesi yang dipilih: " + sesi.value;
    }
    validasiSesi();
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    pesan.className = "";

    const namaOk = validasiNama();
    const emailOk = validasiEmail();
    const sesiOk = validasiSesi();

    if (namaOk && emailOk && sesiOk) {
        // simpan nilainya dulu, karena form akan di-reset
        const namaValue = nama.value.trim();
        const emailValue = email.value.trim();
        const sesiValue = sesi.value;

        form.reset();

        pesan.textContent =
            "Pendaftaran berhasil! Nama: " + namaValue +
            ". Email: " + emailValue +
            ". Sesi: " + sesiValue + ".";
        pesan.className = "sukses";
    } else {
        pesan.textContent = "Periksa kembali isian yang masih salah.";
        pesan.className = "error";
    }
});

form.addEventListener("reset", function () {
    [nama, email, sesi].forEach(function (el) {
        el.classList.remove("invalid", "valid");
    });
    errNama.textContent = "";
    errEmail.textContent = "";
    errSesi.textContent = "";
    pesan.textContent = "";
    pesan.className = "";
    hitungNama.textContent = "0/50 karakter";
    ringkasanSesi.textContent = "Sesi belum dipilih.";
});

sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        ringkasanSesi.textContent = "Sesi belum dipilih.";
    } else {
        ringkasanSesi.textContent = "Sesi yang dipilih: " + sesi.value;
    }
    validasiSesi();
});