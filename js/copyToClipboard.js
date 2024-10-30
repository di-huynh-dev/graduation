const copyContent = async (elementId) => {
  let bankNumber = document.getElementById(elementId).innerText;

  try {
    await navigator.clipboard.writeText(bankNumber);
    Swal.fire({
      title: "Berhasil Disalin!",
      icon: "success",
    });
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
