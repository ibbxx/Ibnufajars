// Fungsi untuk membuat array dengan nilai acak antara 1 dan 50
function buatArrayRandom(panjangArray) {
    let nilaiRandom = [];
    for (let i = 0; i < panjangArray; i++) {
      nilaiRandom.push(Math.floor(Math.random() * 50) + 1);
    }
    return nilaiRandom;
  }
  
  // Fungsi untuk memisahkan array menjadi array genap dan ganjil
  function pisahArrayGenapGanjil(array) {
    let arrayGenap = [];
    let arrayGanjil = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        arrayGenap.push(array[i]);
      } else {
        arrayGanjil.push(array[i]);
      }
    }
    return { arrayGenap, arrayGanjil };
  }
  
  // Fungsi untuk menghitung nilai minimum
  function hitungMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum
  function hitungMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total
  function hitungTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata
  function hitungRataRata(array) {
    return hitungTotal(array) / array.length;
  }
  
  // Fungsi untuk membandingkan array genap dan ganjil
  function bandingkanArray(arrayGenap, arrayGanjil) {
    const minGenap = hitungMin(arrayGenap);
    const maxGanjil = hitungMax(arrayGanjil);
    const totalGenap = hitungTotal(arrayGenap);
    const totalGanjil = hitungTotal(arrayGanjil);
    const rataRataGenap = hitungRataRata(arrayGenap);
    const rataRataGanjil = hitungRataRata(arrayGanjil);
  
    let hasilPerbandingan = {};
    if (minGenap === minGanjil) {
      hasilPerbandingan.min = "Min array genap sama dengan min array ganjil";
    } else {
      hasilPerbandingan.min = minGenap > minGanjil ? "Min lebih besar array genap" : "Min lebih besar array ganjil";
    }
    if (maxGenap === maxGanjil) {
      hasilPerbandingan.max = "Max array genap sama dengan max array ganjil";
    } else {
      hasilPerbandingan.max = maxGanjil > maxGenap ? "Max lebih besar array ganjil" : "Max lebih besar array genap";
    }
    if (totalGenap === totalGanjil) {
      hasilPerbandingan.total = "Total memiliki nilai sama antara array genap dan ganjil";
    } else {
      hasilPerbandingan.total = "Total berbeda antara array genap dan ganjil";
    }
    if (rataRataGenap === rataRataGanjil) {
      hasilPerbandingan.rataRata = "Rata-rata array genap sama dengan rata-rata array ganjil";
    } else {
      hasilPerbandingan.rataRata = rataRataGanjil > rataRataGenap ? "Rata-rata lebih besar array ganjil" : "Rata-rata lebih besar array genap";
    }
    return hasilPerbandingan;
  }
  
  // Membuat array dengan nilai acak
  const panjangArray = 100;
  const nilaiAcak = buatArrayRandom(panjangArray);
  
  // Memisahkan array menjadi genap dan ganjil
  const { arrayGenap, arrayGanjil } = pisahArrayGenapGanjil(nilaiAcak);
  
  // Menghitung nilai min, max, total, dan rata-rata untuk array genap dan ganjil
  const minGenap = hitungMin(arrayGenap);
  const maxGenap = hitungMax(arrayGenap);
  const totalGenap = hitungTotal(arrayGenap);
  const rataRataGenap = hitungRataRata(arrayGenap);
  
  const minGanjil = hitungMin(arrayGanjil);
  const maxGanjil = hitungMax(arrayGanjil);
  const totalGanjil = hitungTotal(arrayGanjil);
  const rataRataGanjil = hitungRataRata(arrayGanjil);
  
  // Membandingkan array genap dan ganjil
  const perbandingan = bandingkanArray(arrayGenap, arrayGanjil);
  
  // Menampilkan hasil
  console.log("Array dengan jumlah index", panjangArray + ":", nilaiAcak);
  console.log("Array genap dengan jumlah index", arrayGenap.length + ":", arrayGenap);
  console.log("Array ganjil dengan jumlah index", arrayGanjil.length + ":", arrayGanjil);
  console.log("Min, Max, Total, Rata-rata pada array genap:");
  console.log("Min:", minGenap);
  console.log("Max:", maxGenap);
  console.log("Total:", totalGenap);
  console.log("Rata-rata:", rataRataGenap);
  console.log("Min, Max, Total, Rata-rata pada array ganjil:");
  console.log("Min:", minGanjil);
  console.log("Max:", maxGanjil);
  console.log("Total:", totalGanjil);
  console.log("Rata-rata:", rataRataGanjil);
  console.log("Perbandingan nilai:");
  console.log(perbandingan);
  
