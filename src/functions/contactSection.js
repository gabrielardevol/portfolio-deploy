
export function contactRespond() { //this function makes .projects-card responsive to changes in size

    console.log("contactRespond")
  var contactCard = document.querySelector(".contact-card")
  console.log(contactCard)
  function logSize() { //this function checks .project-card size and applies style according to
    console.log(contactCard.offsetWidth)
    if(contactCard.offsetWidth < 250){document.querySelectorAll(".red-text").forEach(element => {element.style.display = "none"})}
    else if(contactCard.offsetWidth > 250){document.querySelectorAll(".red-text").forEach(element => {element.style.display = "block"})}
  }

  let interval = setInterval(logSize, 100);
  setTimeout(function() {clearInterval(interval);}, 1500); //this function executes logSize() repeatedly for 3 seconds
}
