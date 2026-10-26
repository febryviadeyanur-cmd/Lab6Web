const form = document.getElementById("formPendaftaran");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const usia = document.getElementById("usia");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const usiaValue = usia.value.trim();
    const usiaAngka = Number(usiaValue);

    if (namaValue === "") {
        pesanForm.textContent = "Nama wajib diisi.";
        return;
    }

    //Eksperimen 2: nama minimal 3 karakter
    if (namaValue.length < 3) {
        pesanForm.textContent = "Nama minimal terdiri dari 3 karakter.";
        return;
    }

    if (emailValue === "") {
        pesanForm.textContent = "Email wajib diisi.";
        return;
    }

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(emailValue)) {
        pesanForm.textContent = "Format email tidak valid.";
        return;
    }

    if (usiaValue === "" || !Number.isInteger(usiaAngka)
        || usiaAngka < 17 || usiaAngka > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat antara 17 dan 100.";
        return;
    }

    pesanForm.textContent =
        "Pendaftaran berhasil! Selamat datang, " + namaValue + ".";
    form.reset();
});