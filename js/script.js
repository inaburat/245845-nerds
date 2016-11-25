var link = document.querySelector(".js-hidden-form");
var popup = document.querySelector(".hidden-form");
var close = document.querySelector(".hidden-form-close");

popup.classList.add("hide-form");
close.classList.add("hidden-form-close-show");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("hidden-form-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("hidden-form-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("hidden-form-show")) {
      popup.classList.remove("hidden-form-show");
    }
  }
});
