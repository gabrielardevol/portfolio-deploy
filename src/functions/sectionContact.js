export function contactResponds() { 
  var contactCard = document.querySelector(".contact-card")
  console.log("contactResponds")
  //console.log(document.querySelector(".me-pic").style.width)
  //document.querySelector(".me-pic").style.width = contactCard.offsetWidth / 4 + "px"
 // document.querySelector(".me-pic").style.height = contactCard.offsetWidth / 4 + "px"
  function logSize() { 
    if(contactCard.offsetWidth < 400){document.querySelector("#contact-second-column").style.display = "none"; document.querySelector("#contact-first-column").style.width = "100%";
    document.querySelectorAll(".red-text").forEach(element => {element.style.display = "none"})}
    else if(contactCard.offsetWidth > 400){document.querySelector("#contact-second-column").style.display = "block"; document.querySelector("#contact-first-column").style.width = "100%";
    document.querySelectorAll(".red-text").forEach(element => {element.style.display = "block"})
    }
    console.log(document.querySelector("#me-pic-container").offsetHeight)
    document.querySelector(".me-pic").style.width = document.querySelector("#me-pic-container").offsetHeight / 2 + "px"
    document.querySelector(".me-pic").style.height = document.querySelector("#me-pic-container").offsetHeight / 2 + "px"

  }
  
  let interval = setInterval(logSize, 100);
  setTimeout(function() {clearInterval(interval);}, 1500); 
}

//window.onload(contactResponds)