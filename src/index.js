$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
  $("button").click(function () {
    $("p").hide(1000);
  });
});
