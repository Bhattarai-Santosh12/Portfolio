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
}
