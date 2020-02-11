$(document).ready(function() {
  init();

  $("#searchBtn").on("click", function() {
    event.preventDefault();
    var searchInput = $("#searchInput").val();
    sessionStorage.setItem("search", searchInput);
    window.location = "./searchResult.html";
  });
  0;

  function init() {
    $("#id01").attr("style", "display:block");
  }

  $("#submitBtn").on("click", function() {
    console.log($("#userName").val());
    console.log($("#email").val());
    console.log($("#submit.Btn").val());
    if (
      $("#userName").val() !== "" &&
      $("#email").val() !== "" &&
      $("#subject").val() !== ""
    ) {
      $("#message").text(
        "Your message has been received. You will be contacted as soon as possible."
      );
      $("#message").css({
        style: "display:block",
        color: "red"
      });
      setTimeout(afterTimeOut, 1500);
    } else {
      $("#message").text("Please fill out all fields...");
    }
  });
});
