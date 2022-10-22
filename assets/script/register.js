const modal = document.querySelector(".popup");
const trigger = document.querySelector(".regis-btn");
const closeButton = document.querySelector(".close-btn");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function hidePassword() {
  var pw = document.getElementById("myInput");
  var show = document.getElementById("non-slash");
  var hide = document.getElementById("eye-slash");

  if (pw.type === "password") {
    pw.type = "text";
    show.style.display = "block";
    hide.style.display = "none";
  } else {
    pw.type = "password";
    show.style.display = "none";
    hide.style.display = "block";
  }
}

function hidePassword1() {
  var pw = document.getElementById("myInput1");
  var show = document.getElementById("non1-slash");
  var hide = document.getElementById("eye1-slash");

  if (pw.type === "password") {
    pw.type = "text";
    show.style.display = "block";
    hide.style.display = "none";
  } else {
    pw.type = "password";
    show.style.display = "none";
    hide.style.display = "block";
  }
}