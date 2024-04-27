var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabName) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabName).classList.add("active-tab");
}
// var sidemenu = document.getElementById("sidemenu"); // Correct the variable name here

// function openmenu() {
//   sidemenu.style.right = "0"; // Move the menu into view
// }

// function closemenu() {
//   sidemenu.style.right = "-200px"; // Move the menu out of view
// }

var sidemenu = document.getElementById("sidemenu");
console.log(sidemenu); // This should log the element or null if not found

function openmenu() {
  if (sidemenu) {
    sidemenu.style.right = "0";
  } else {
    console.error("Element #sidemenu not found");
  }
}

function closemenu() {
  if (sidemenu) {
    sidemenu.style.right = "-200px";
  } else {
    console.error("Element #sidemenu not found");
  }
}

//send email
// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "santoshbhattarai287@gmail.com",
//     Password: "9817964232",
//     To: "santoshbhattarai110@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New contact form enquery",
//     Body:
//       "Name" +
//       document.getElementById("name").value +
//       "<br> Email" +
//       document.getElementById("email").value +
//       "<br> Message" +
//       document.getElementById("message").value,
//   }).then((message) => alert("Message Send Successfully  !!"));
// }

//attempt to send email
// fetch("https://formsubmit.co/ajax/santoshbhattarai287@gmail.com", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({ Name: namee, Email: email, Message: message }),
// });

// error
btn = document.getElementById("sendMailBtn");
btn.addEventListener("click", sendMail);
function sendMail() {
  // e.preventDefault();
  console.log("hjkdashjkhkj");
  var params = {
    Name: document.getElementById("namee").value,
    Email: document.getElementById("email").value,
    Message: document.getElementById("message").value,
  };
  document.getElementById("namee").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  fetch("https://formsubmit.co/ajax/santoshbhattarai287@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(params),
  });
  // const serviceID = "service_dmyhjmh";
  // const templateID = "template_gd2pmd3s";

  // emailjs
  //   .send(serviceID, templateID, params)
  //   .then((res) => {
  //     document.getElementById("namee").value = "";
  //     document.getElementById("email").value = "";
  //     document.getElementById("message").value = "";
  //     console.log(res);
  //     alert("Your message sent successfully!!");
  //   })
  //   .catch((err) => console.log(err));
}
