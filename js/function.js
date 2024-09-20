function read() {
  $.ajax({
    url: "function.php",
    type: "POST",
    data: {
      method: "read",
    },
    success: function (response) {
      var data = JSON.parse(response);
      var commentRead = $("#comment-wish");
      commentRead.empty();
      $.each(data, function (i, d) {
        commentRead.append(
          "<div class='card-comment mb-5'>" +
            "<h6 class='comment-name mb-1'>" +
            d.nama_lengkap +
            "</h6>" +
            "<span class='comment-confirm'>" +
            d.status +
            "</span>" +
            "<hr class='comment-divider mt-2' />" +
            "<p class='comment-message'>" +
            d.ucapan +
            "</p>" +
            "</div >",
        );
      });
    },
  });
}

function store() {
  $.ajax({
    url: "function.php",
    type: "POST",
    data: {
      method: "store",
      nama_lengkap: $("#nama_lengkap").val(),
      status: $("#status").val(),
      ucapan: $("#ucapan").val(),
    },
    success: function (response) {
      var data = JSON.parse(response);
      if (data.success) {
        alert("Sukses");
        read();
      } else {
        alert("Gagal");
      }
    },
  });
}

function save() {
  $("#myform").attr("type") == "create" ? store() : clearForm();
}

function clearForm() {
  $("#myform")[0].reset();
  $("#myform").attr("type", "create");
}
