const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";
const namaContainer = document.querySelector(".open-title span");

namaContainer.innerText = `${pronoun} ${nama}`.replace(/ ,$/, ",");

document.getElementById("nama_lengkap").value = nama;
