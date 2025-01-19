const judul = "Selamat Ulang Tahun Siti nurul aini!";
const pesan = "Semoga hari ini menjadi hari yang bahagia dan menyenangkan bagi Aini!";
const tombol = document.getElementById("tombol");
let i = 0;
let j = 0;
let k = 0;
const lirik = "pencet tombol di atas untuk memulai lagu";
const linkMusik = "https://drive.google.com/file/d/1BhgE9kokqFVBFUitFhJ98O4wIdtjuprp/view?usp=drivesdk"; // ganti dengan link musik Anda

const ketikJudul = setInterval(() => {
  document.getElementById("judul").innerHTML += judul[i];
  i++;
  if (i >= judul.length) {
    clearInterval(ketikJudul);
    setTimeout(ketikPesan, 500);
  }
}, 100);

const ketikPesan = () => {
  const pesanElement = document.getElementById("pesan");
  const interval = setInterval(() => {
    pesanElement.innerHTML += pesan[j];
    j++;
    if (j >= pesan.length) {
      clearInterval(interval);
      setTimeout(() => {
        tombol.style.display = "block";
      }, 500);
    }
  }, 100);
};

function hapusTeks() {
  document.getElementById("judul").innerHTML = "";
  document.getElementById("pesan").innerHTML = "";
  tombol.style.display = "none";
  document.getElementById("tengah").style.display = "block";
  setTimeout(ketikLagu, 1000);
}

function ketikLagu() {
  const laguElement = document.getElementById("lagu");
  laguElement.style.display = "block";
  const interval = setInterval(() => {
    laguElement.innerHTML += lirik[k];
    k++;
    if (k >= lirik.length) {
      clearInterval(interval);
    }
  }, 100);
}

function playMusik() {
  const musik = document.getElementById("musik");
  musik.src = linkMusik;
  musik.type = "audio/mp3";
  musik.controls = true;
  musik.style.display = "block";
  musik.play(); // tambahkan ini untuk memutar musik secara otomatis