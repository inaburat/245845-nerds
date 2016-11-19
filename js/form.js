var link = document.querySelector(".js-hidden-form");
var popup = document.querySelector(".hidden-form");
var close = document.querySelector(".hidden-form-close");
var login = popup.querySelector(".your-name");
var mail = popup.querySelector(".your-mail");
var storage = localStorage.getItem("login");

link.addEventListener("click", function() {
  event.preventDefault();
  popup.classList.add("hidden-form-show")
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
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
