function Show_password_toggle() {
  const password = document.getElementById("old-password-input");
  if (password.type !== "password") {
    password.type = "password";
    document.getElementById("show-password").src =
      "../pub/assets/image/eye.svg";
  } else {
    password.type = "text";
    document.getElementById("show-password").src =
      "../pub/assets/image/eye-closed-duotone.svg";
  }
}

function Show_newpassword_toggle() {
  const newpassword = document.getElementById("new-password-input");
  if (newpassword.type !== "password") {
    newpassword.type = "password";
    document.getElementById("show-new-password").src =
      "../pub/assets/image/eye.svg";
  } else {
    newpassword.type = "text";
    document.getElementById("show-new-password").src =
      "../pub/assets/image/eye-closed-duotone.svg";
  }
}

// function Show_newpassword_toggle() {
//   const newpassword = document.getElementById("new-password-input");
//   if (newpassword.type == "password") {
//     newpassword.type = "text";
//     document.getElementById("show-password").src =
//       "../pub/assets/image/eye-outline.svg";
//   } else {
//     newpassword.type = "password";
//     document.getElementById("show-password").src =
//       "../pub/assets/image/eye-closed-duotone.svg";
//   }
// }

document.getElementById("show-more").addEventListener("click", Expand);
function Expand() {
  const attachment = document.querySelector(".attachment");
  const title = document.getElementById("statut-title");
  const button = document.getElementById("add-inf");
  const spacer = document.querySelector(".spacer");

  if (attachment.style.display !== "block") {
    attachment.style.display = "block";
    button.style.display = "block";
    spacer.style.display = "block";
    title.style.textAlign = "center";
    document.querySelector("#show-more-text").innerHTML = "Zwiń";
    document.getElementById("show-more-button").src =
      "../pub/assets/image/expand-less-rounded.svg";
  } else {
    attachment.style.display = "none";
    button.style.display = "none";
    spacer.style.display = "none";
    title.style.textAlign = "left";
    document.querySelector("#show-more-text").innerHTML = "Rozwiń";
    document.getElementById("show-more-button").src =
      "../pub/assets/image/expand-more-rounded.svg";
  }
}
