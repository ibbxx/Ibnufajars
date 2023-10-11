class Pendaftar {
  constructor(nama, umur, uangSaku) {
    this.nama = nama;
    this.umur = umur;
    this.uangSaku = uangSaku;
  }
}

const pendaftarList = [];

function openTab(tabName) {
  const tabs = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const uangSaku = parseInt(document.getElementById("uangSaku").value);

  // Mengosongkan pesan kesalahan sebelum validasi
  document.getElementById("namaError").textContent = "";
  document.getElementById("umurError").textContent = "";
  document.getElementById("uangSakuError").textContent = "";

  // Validasi nama, umur, dan uang saku
  if (nama.length < 10) {
    document.getElementById("namaError").textContent = "Minimal 10 karakter.";
  }
  if (umur < 25) {
    document.getElementById("umurError").textContent = "Minimal 25 tahun.";
  }
  if (uangSaku < 100000 || uangSaku > 1000000) {
    document.getElementById("uangSakuError").textContent = "Harus antara 100 ribu dan 1 juta.";
  }

  // Jika ada pesan kesalahan, hentikan proses pengiriman formulir
  if (document.getElementById("namaError").textContent || 
      document.getElementById("umurError").textContent || 
      document.getElementById("uangSakuError").textContent) {
    return;
  }

  // Jika semua data valid, lanjutkan dengan proses pendaftaran
  const pendaftar = new Pendaftar(nama, umur, uangSaku);
  pendaftarList.push(pendaftar);
  updateListPendaftar();
  document.getElementById("registrationForm").reset();
});

function updateListPendaftar() {
  const tableBody = document.querySelector("#pendaftarTable tbody");
  tableBody.innerHTML = "";

  let totalUangSaku = 0;
  let totalUmur = 0;

  pendaftarList.forEach((pendaftar) => {
    const row = tableBody.insertRow();
    const cellNama = row.insertCell();
    const cellUmur = row.insertCell();
    const cellUangSaku = row.insertCell();

    cellNama.textContent = pendaftar.nama;
    cellUmur.textContent = pendaftar.umur;
    cellUangSaku.textContent = pendaftar.uangSaku;

    totalUangSaku += pendaftar.uangSaku;
    totalUmur += pendaftar.umur;
  });

  const averageUangSaku = totalUangSaku / pendaftarList.length;
  const averageUmur = totalUmur / pendaftarList.length;

  document.getElementById("averageUangSaku").textContent = averageUangSaku.toFixed(2);
  document.getElementById("averageUmur").textContent = averageUmur.toFixed(2);
}
