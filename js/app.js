$(document).foundation();
$(document).ready(function () {
  $(".thumbnail").click(function () {
    $(".thumbnail").fadeOut();
  });

  $("#naslovpocetna").click(function () {
    $("#naslovpocetna").css({ color: "rgb(243, 156, 170)" });
  });

  $(".facebook").mouseenter(function () {
    $(".facebook").css({ backgroundColor: "blue" });
  });

  $(".facebook").mouseleave(function () {
    $(".facebook").css({ backgroundColor: "rgb(255, 193, 203)" });
  });

  $("#tekst-poruke").focus(function () {
    $("#tekst-poruke").val("Napiši poruku");
  });

  $(".button").click(function () {
    alert("Poruka uspješno poslana!");
  });
});
