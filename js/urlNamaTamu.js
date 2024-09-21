const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";
const namaContainer = document.querySelector(".open-title span");

const displayText = `${pronoun} ${nama}`.trim().replace(/\s+$/, ''); // Trim any trailing spaces
namaContainer.innerText = displayText.endsWith(",") ? displayText : displayText + ","; // Ensure a comma if needed

// Set the value of the input
document.getElementById("nama_lengkap").value = nama;
