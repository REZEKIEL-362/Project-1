// jQuery 3.x-style ready event and locally scoped $
jQuery(function ($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
document.getElementById("submit").addEventListener("click", confirm);

function confirm(event) {
  for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
    if (document.getElementsByTagName("input").item(i).value === "" || (document.getElementsByTagName("input").item(i).type === "radio") && (document.getElementsByTagName("input").item(i).checked === false)) {
      return false;
    } else {
      fname = document.getElementById("fname").value;
      lname = document.getElementById("lname").value;
      name = document.getElementById("fname").value;
      alert("Thank you " + fname + " " + lname + ".");
      return true;
    }
  }
}