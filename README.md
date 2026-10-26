Lab6Web 

Praktikum 6: JavaScript DOM dan Event Handling

Mata Kuliah: Pemrograman Web 

Nama: Febryvia Deya Nur

NIM: 312510194

Kelas: I251B

Pertemuan 7

Program Studi: Teknik Informatika, Universitas Pelita Bangsa

**Tujuan Praktikum**

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.

2. Menggunakan ID, class, dan selector CSS untuk memilih elemen HTML.

3. Mengubah teks dan gaya elemen melalui JavaScript.

4. Menangani event pengguna menggunakan addEventListener().

5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.

6. Membuat halaman web interaktif menggunakan HTML, CSS, dan JavaScript.

**Struktur Folder**

Lab6Web/
├── README.md
├── Latihan_DOM/
│   ├── index.html
│   ├── 
│   └── script.js
├── Latihan1_DOM/
│   ├── index.html
│   └── script.js
├── Latihan2_Click/
│   ├── index.html
│   └── script.js
├── Latihan3_CSS/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Latihan4_Input/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Latihan5_Form/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Latihan6_TodoList/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── MiniProject_Workshop/
│   ├── index.html
│   ├── style.css
│   └── script.js


## Langkah Kerja

### Latihan 1 : Mengakses dan Mengubah Elemen DOM

Pada latihan ini, saya mempelajari cara memilih elemen HTML menggunakan JavaScript dan mengubah teksnya melalui DOM.

Langkah pengerjaan:
1. Membuat file `index.html` yang berisi judul dan paragraf.
2. Membuat file `script.js` untuk mengakses elemen menggunakan `getElementById()`.
3. Mengubah teks elemen menggunakan `textContent`.
4. Membuka halaman di browser dan memastikan teks berhasil berubah.

Hasil Screenshoot:

![alt text](<Latihan 1/Screenshot 2026-10-26 133401.png>)

### Latihan 2 : Event Click

Pada latihan ini, saya mempelajari cara menjalankan fungsi ketika tombol diklik menggunakan event listener.

Langkah pengerjaan:
1. Membuat tombol dan paragraf pada file HTML.
2. Menambahkan `addEventListener("click", ...)` pada tombol.
3. Mengubah isi paragraf dan menampilkan waktu ketika tombol diklik.
4. Menguji tombol melalui browser dan mengambil screenshot hasilnya.

Hasil Screenshoot:

![alt text](<Latihan 2/Screenshot 2026-10-26 133831.png>)

### Latihan 3 : Mengubah Class dan Gaya CSS

Pada latihan ini, saya mempelajari cara mengubah tampilan elemen menggunakan JavaScript dan class CSS.

Langkah pengerjaan:
1. Membuat file HTML, CSS, dan JavaScript.
2. Menentukan class CSS untuk mengatur tampilan teks.
3. Menggunakan `classList.toggle()` ketika tombol diklik.
4. Menguji perubahan tampilan teks pada browser.

Hasil Screenshoot:

![alt text](<Latihan 3/Screenshot 2026-10-26 134256.png>)

![alt text](<Latihan 3/Screenshot 2026-10-26 134315.png>)

### Latihan 4 : Event Input dan Penghitung Karakter

Pada latihan ini, saya mempelajari event `input` untuk menghitung karakter yang dimasukkan pengguna.

Langkah pengerjaan:
1. Membuat kolom input dan elemen penghitung karakter.
2. Menggunakan event `input` untuk mendeteksi perubahan teks.
3. Menghitung karakter menggunakan `value.length`.
4. Menguji penghitung dengan mengetik dan menghapus teks.

Hasil Screenshoot:

![alt text](<Latihan 4/Screenshot 2026-10-26 134657.png>)

![alt text](<Latihan 4/Screenshot 2026-10-26 134738.png>)

### Latihan 5 : Validasi Form

Pada latihan ini, saya mempelajari cara memeriksa data pengguna sebelum form diproses.

Langkah pengerjaan:
1. Membuat form berisi kolom nama, email, dan usia.
2. Menambahkan event `submit` dan `preventDefault()`.
3. Memeriksa nama, format email, serta rentang usia.
4. Menampilkan pesan kesalahan atau sukses sesuai hasil validasi.
5. Menguji input yang salah dan benar, kemudian mengambil screenshot hasilnya.

Hasil Screenshoot:

![alt text](<Latihan 5/Screenshot 2026-10-26 135907.png>)

![alt text](<Latihan 5/Screenshot 2026-10-26 151300.png>)

### Latihan 6 : To-do List

Pada latihan ini, saya membuat daftar tugas sederhana yang dapat ditambahkan dan ditandai selesai.

Langkah pengerjaan:
1. Membuat kolom input, tombol tambah, dan daftar tugas.
2. Membuat elemen tugas menggunakan `createElement()`.
3. Menambahkan tugas ke daftar menggunakan `appendChild()`.
4. Menggunakan `classList.toggle()` untuk menandai tugas yang selesai.
5. Menguji fitur penambahan dan penandaan tugas melalui browser.

Hasil Screenshoot:

![alt text](<Latihan 6/Screenshot 2026-10-26 140747.png>)

### Mini Project : Form Pendaftaran Workshop

Pada mini project ini, saya menerapkan materi DOM dan event handling untuk membuat form pendaftaran workshop yang interaktif.

Langkah pengerjaan:
1. Membuat halaman form menggunakan HTML dan mengatur tampilannya dengan CSS.
2. Menambahkan JavaScript untuk menangani input dan pilihan sesi.
3. Membuat validasi nama, email, dan pilihan sesi.
4. Menampilkan ringkasan pendaftaran serta pesan kesalahan atau sukses.
5. Menguji form dengan input yang salah dan benar, kemudian mengambil screenshot hasilnya.

Hasil Screenshoot:

![alt text](<Mini Project/Screenshot 2026-10-26 153305.png>)

![alt text](<Mini Project/Screenshot 2026-10-26 153531.png>)

![alt text](<Mini Project/Screenshot 2026-10-26 153552-1.png>)

![alt text](<Mini Project/Screenshot 2026-10-26 153927.png>)

## Eksperimen Mandiri

### Eksperimen 1 : Menambahkan Tombol Hapus pada To-do List

Eksperimen ini dilakukan dengan menambahkan tombol Hapus pada setiap tugas di To-do List. Tombol tersebut menggunakan event `click` untuk menjalankan fungsi `remove()`, sehingga pengguna dapat menghapus tugas tertentu tanpa menghapus seluruh daftar.

Hasil Screenshoot:

![alt text](<Eksperimen Screenshot/Screenshot 2026-10-26 154541.png>)

![alt text](<Eksperimen Screenshot/Screenshot 2026-10-26 154614.png>)

![alt text](<Eksperimen Screenshot/Screenshot 2026-10-26 154623.png>)

### Eksperimen 2 : Validasi Nama Minimal Tiga Karakter

Eksperimen ini bertujuan untuk memastikan nama yang dimasukkan pengguna memiliki minimal tiga karakter. JavaScript menggunakan properti `length` untuk menghitung jumlah karakter dan kondisi `if...else` untuk menentukan apakah nama memenuhi ketentuan. Jika nama kurang dari tiga karakter, program menampilkan pesan kesalahan.

Hasil Screenshoot:

![alt text](<Screenshot 2026-10-26 155638.png>) 

![alt text](<Screenshot 2026-10-26 155740.png>)

### Eksperimen 3 : Event `change` pada Dropdown

Eksperimen ini menggunakan event `change` untuk mendeteksi perubahan pilihan pada dropdown. Nilai pilihan diambil menggunakan properti `value`, kemudian ditampilkan pada halaman menggunakan `textContent`. Dengan demikian, informasi sesi dapat diperbarui sesuai pilihan pengguna.

Hasil Screenshoot:

![alt text](<Mini Project/Screenshot 2026-10-26 153531.png>)

### Eksperimen 4 : Menyembunyikan dan Menampilkan Paragraf

Eksperimen ini bertujuan untuk mempelajari cara mengatur visibilitas elemen HTML menggunakan JavaScript dan CSS. Tombol digunakan untuk menjalankan `classList.toggle()`, sedangkan class CSS mengatur apakah paragraf ditampilkan atau disembunyikan menggunakan `display: none`.

Hasil Screenshoot:

![alt text](<Eksperimen Screenshot/Screenshot 2026-10-26 182230.png>)

![alt text](<Eksperimen Screenshot/Screenshot 2026-10-26 182902.png>)

### Eksperimen 5 : Script di dalam `<head>` tanpa `defer`

Eksperimen ini dilakukan untuk memahami pengaruh urutan pemuatan HTML dan JavaScript. Jika script dijalankan sebelum elemen HTML selesai diproses, JavaScript dapat gagal menemukan elemen yang dibutuhkan. Hal ini dapat menyebabkan error ketika program mencoba mengakses properti dari nilai `null`. Penggunaan atribut `defer` dapat membantu memastikan script dijalankan setelah dokumen HTML selesai diproses.

Hasil Screenshoot:

![alt text](<Screenshot 2026-10-26 182617.png>)

FULL screeenshoot Lab6Web

![alt text](<Latihan/Screenshot 2026-10-26 183131.png>)

![alt text](<Latihan/Screenshot 2026-10-26 183507.png>)

## Jawaban Pertanyaan Evaluasi

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (*Document Object Model*) adalah representasi dokumen HTML dalam bentuk struktur objek yang disusun seperti pohon (*tree*). Setiap elemen HTML, seperti judul, paragraf, gambar, dan tombol, dapat diakses melalui JavaScript sebagai objek yang memiliki properti dan metode tertentu.

DOM memungkinkan JavaScript berinteraksi dengan halaman web tanpa harus menulis ulang seluruh dokumen HTML. Dengan DOM, program dapat memilih elemen, mengubah teks, mengatur atribut, menambahkan class CSS, membuat elemen baru, menghapus elemen, serta merespons tindakan pengguna.

Contohnya, JavaScript dapat memilih elemen judul menggunakan `document.getElementById("judul")`, kemudian mengubah teksnya menggunakan `textContent`.

```javascript
const judul = document.getElementById("judul");
judul.textContent = "Belajar JavaScript DOM";
```

Pada contoh tersebut, JavaScript mengambil elemen yang memiliki ID `judul`, lalu mengganti teks di dalamnya. Perubahan dapat langsung terlihat pada halaman web tanpa perlu memuat ulang halaman.

### 2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?

Ketiga metode tersebut digunakan untuk memilih elemen HTML, tetapi memiliki perbedaan dalam cara pemilihan dan hasil yang dikembalikan.

- **`getElementById()`** digunakan untuk memilih elemen berdasarkan nilai atribut ID. Metode ini mengembalikan elemen yang cocok atau `null` jika elemen tidak ditemukan.
- **`querySelector()`** digunakan untuk memilih elemen pertama yang cocok dengan selector CSS. Selector dapat berupa ID, class, nama tag, atau kombinasi selector.
- **`querySelectorAll()`** digunakan untuk memilih semua elemen yang cocok dengan selector CSS. Hasilnya berupa `NodeList`, yang dapat digunakan untuk memproses beberapa elemen.

Contoh:

```javascript
const judul = document.getElementById("judul");
const paragraf = document.querySelector(".paragraf");
const semuaTombol = document.querySelectorAll("button");
```

Pada variabel `judul` mengambil elemen dengan ID `judul`, variabel `paragraf` mengambil elemen pertama dengan class `paragraf`, sedangkan `semuaTombol` menyimpan kumpulan elemen tombol yang ditemukan.

Jadi, `getElementById()` cocok untuk mencari elemen berdasarkan ID, `querySelector()` untuk mengambil satu elemen menggunakan selector CSS, dan `querySelectorAll()` untuk mengambil semua elemen yang sesuai.

### 3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event yang umum digunakan?

`addEventListener()` adalah metode JavaScript yang digunakan untuk memasang *event listener* pada suatu elemen. Event listener akan menjalankan fungsi tertentu ketika peristiwa yang ditentukan terjadi.

Metode ini membuat halaman web dapat merespons tindakan pengguna, seperti mengeklik tombol, mengetik pada kolom input, atau mengirim formulir.

Tiga contoh event yang umum digunakan adalah:

1. **`click`** — terjadi ketika pengguna mengeklik suatu elemen, misalnya tombol.
2. **`input`** — terjadi ketika nilai pada kolom input berubah akibat tindakan pengguna, seperti mengetik atau menempelkan teks.
3. **`submit`** — terjadi ketika pengguna mengirimkan formulir.

Contoh penggunaan:

```javascript
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
  alert("Tombol berhasil diklik!");
});
```

Pada contoh tersebut, JavaScript memilih tombol dengan ID `tombolAksi`. Ketika tombol diklik, fungsi yang dipasang melalui `addEventListener()` dijalankan dan menampilkan pesan.

Selain tiga event tersebut, terdapat juga event `change`, `keydown`, `mouseover`, dan `reset` yang dapat digunakan sesuai kebutuhan.

### 4. Mengapa `event.preventDefault()` digunakan pada event submit form?

`event.preventDefault()` digunakan untuk menghentikan perilaku bawaan browser terhadap suatu event. Pada formulir HTML, perilaku bawaan ketika form dikirim adalah melakukan proses pengiriman sesuai atribut form dan biasanya memuat ulang atau berpindah halaman.

Dalam validasi form menggunakan JavaScript, `preventDefault()` digunakan agar proses pengiriman tidak langsung dilakukan sebelum data diperiksa. Dengan demikian, JavaScript dapat memeriksa apakah input sudah sesuai, kemudian menampilkan pesan kesalahan atau keberhasilan kepada pengguna.

Contoh:

```javascript
const form = document.getElementById("formDaftar");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Form diperiksa oleh JavaScript.");
});
```

Pada kode tersebut, `preventDefault()` mencegah perilaku submit bawaan. Setelah itu, JavaScript menjalankan instruksi yang ada di dalam fungsi.

Perlu diperhatikan bahwa `preventDefault()` tidak otomatis memvalidasi data. Pemeriksaan nama, email, atau data lainnya tetap harus dibuat secara terpisah di dalam kode JavaScript.

### 5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?

`textContent` dan `innerHTML` sama-sama dapat digunakan untuk membaca atau mengubah isi suatu elemen HTML, tetapi keduanya memiliki cara kerja yang berbeda.

- **`textContent`** membaca atau mengubah isi elemen sebagai teks biasa. Karakter yang dimasukkan tidak diproses sebagai tag HTML.
- **`innerHTML`** membaca atau mengubah isi elemen sebagai markup HTML. Tag yang diberikan dapat diproses browser sebagai elemen HTML.

Contoh menggunakan `textContent`:

```javascript
const pesan = document.getElementById("pesan");
pesan.textContent = "<b>Halo!</b>";
```

Hasilnya, teks `<b>Halo!</b>` ditampilkan sebagai teks biasa, bukan sebagai tulisan tebal.

Contoh menggunakan `innerHTML`:

```javascript
const pesan = document.getElementById("pesan");
pesan.innerHTML = "<b>Halo!</b>";
```

Hasilnya, kata "Halo!" ditampilkan dengan format tebal karena browser memproses tag `<b>` sebagai markup HTML.

Dari sisi keamanan, `textContent` lebih tepat digunakan untuk menampilkan teks yang berasal dari pengguna. Sebaliknya, penggunaan `innerHTML` dengan input yang tidak dipercaya dapat menimbulkan risiko XSS (*Cross-Site Scripting*), yaitu ketika konten berbahaya dimasukkan ke halaman dan dapat dieksekusi atau diproses oleh browser dengan cara yang tidak diinginkan.

Oleh karena itu, untuk menampilkan nama atau tugas yang dimasukkan pengguna pada latihan To-do List, penggunaan `textContent` merupakan pilihan yang lebih aman.

### 6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?

`classList.toggle()` adalah metode JavaScript yang digunakan untuk menambahkan class CSS jika class tersebut belum ada atau menghapusnya jika sudah ada.

Metode ini memudahkan perubahan tampilan elemen berdasarkan tindakan pengguna. JavaScript cukup mengatur class, sedangkan aturan tampilannya ditentukan melalui CSS.

Contoh JavaScript:

```javascript
const teks = document.getElementById("teksGaya");

teks.classList.toggle("highlight");
```

Contoh CSS:

```css
.highlight {
  color: blue;
  background-color: lightblue;
}
```

Ketika kode dijalankan, class `highlight` ditambahkan jika tidak ada sehingga teks mendapatkan warna dan latar belakang sesuai CSS. Jika kode dijalankan kembali, class dapat dihapus dan ditampilan kembali mengikuti aturan CSS lainnya.

Dengan demikian, `classList.toggle()` dapat digunakan untuk membuat fitur interaktif, seperti mengubah tampilan teks, menampilkan atau menyembunyikan elemen melalui class CSS, serta menandai tugas yang sudah selesai pada To-do List.

### 7. Sebutkan minimal tiga skenario pengujian validasi form.

Pengujian dilakukan untuk memastikan bahwa form dapat menerima data yang benar dan menolak data yang tidak sesuai dengan aturan validasi.

Berikut beberapa skenario pengujian yang dapat dilakukan:

| No. | Data atau Kondisi Pengujian | Hasil yang Diharapkan |
|---|---|---|
| 1 | Semua kolom dikosongkan | Form menampilkan pesan bahwa kolom wajib diisi. |
| 2 | Nama hanya berisi satu atau dua karakter | Form menolak nama apabila ketentuan minimal tiga karakter diterapkan. |
| 3 | Email diisi `febry@` | Form menampilkan pesan bahwa format email tidak valid. |
| 4 | Usia diisi 16 tahun | Form menolak input karena usia berada di bawah batas minimum 17 tahun. |
| 5 | Usia diisi 101 tahun | Form menolak input karena usia melebihi batas maksimum 100 tahun. |
| 6 | Nama, email, dan usia diisi sesuai aturan | Form menampilkan pesan sukses. |

Skenario pengujian membantu mengetahui bahwa validasi tidak hanya bekerja pada input yang benar, tetapi juga dapat menangani kesalahan yang mungkin dilakukan pengguna.

Pengujian harus disesuaikan dengan aturan yang benar-benar diterapkan pada kode. Misalnya, pemeriksaan usia berlaku pada form yang memang memiliki kolom usia. Untuk Mini Project pendaftaran workshop, pengujian harus mengikuti kolom dan ketentuan validasi yang terdapat pada mini project.