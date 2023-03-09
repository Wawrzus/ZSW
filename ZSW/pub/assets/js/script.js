function Show_password_toggle() {
  const password = document.getElementById("old-password-input");
  if (password.type !== "password") {
    password.type = "password";
    document.getElementById("show-password").src =
      "../pub/assets/image/eye-closed-duotone.svg";
  } else {
    password.type = "text";
    document.getElementById("show-password").src =
      "../pub/assets/image/eye.svg";
  }
}

function Show_newpassword_toggle() {
  const newpassword = document.getElementById("new-password-input");
  if (newpassword.type !== "password") {
    newpassword.type = "password";
    document.getElementById("show-new-password").src =
      "../pub/assets/image/eye-closed-duotone.svg";
  } else {
    newpassword.type = "text";
    document.getElementById("show-new-password").src =
      "../pub/assets/image/eye.svg";
  }
}
