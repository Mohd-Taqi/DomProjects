const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
// Host: "smtp.elasticemail.com",
// Username: "mohammedtaqiuddin4117@gmail.com",
// Password: "5EBB12B68F883A1D5DA6DA04872D481EF4CF",

function sendEmail() {
  const BodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${message.value}`;
  Email.send({
    SecureToken : "798da332-2848-4a2f-bf5a-9e7daf4bc77f",
    To: "mohammedtaqiuddin4117@gmail.com",
    From: "mohammedtaqiuddin4117@gmail.com",
    Subject: subject.value,
    Body: BodyMessage,
  }).then((message) => {
    if (message == "OK") {
      swal({
        title: "Success!",
        text: "Data sent successfully!",
        icon: "success",
        button: "Done",
      });
    } else {
      swal({
        title: "Error!",
        text: "Failed to send data",
        icon: "error",
        button: "Done",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}
function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const emailTxtError = document.querySelector(".error-txt.email");
  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      emailTxtError.innerHTML = "Enter a valid email address";
    } else {
      emailTxtError.innerHTML = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error") 
  ) {
    sendEmail();
    form.reset();
    return false;
  }
  else{
    
    swal({
      title: "Please fill the values!",
      text: "You clicked the button!",
      icon: "error",
      button: "Done",
    });
  }
});
