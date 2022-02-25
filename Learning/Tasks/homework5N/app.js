$(function () {
  $("button").click(function () {
    if ($("input").attr("type") == "password")
      return $("input").attr("type", "text");

    if ($("input").attr("type") == "text")
      return $("input").attr("type", "password");
  });

  $("input").on("input", function () {
    if ($("input").val().length > 10 && $("input").val().match(/[A-Z]/) && $("input").val().match(/\d/)) {
         $("input").removeClass("red").addClass("green");
     } else {
         $("input").addClass("red").removeClass("green");
    }

    console.log();
    console.log();
  });
});
