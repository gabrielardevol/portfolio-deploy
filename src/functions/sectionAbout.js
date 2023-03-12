var longBioText = false
export function showLongBio() {
  if(longBioText === false){document.querySelectorAll(".long-bio-text").forEach(element => {element.style.display = "block"; longBioText = true})}
  else if (longBioText === true){ document.querySelectorAll(".long-bio-text").forEach(element => {element.style.display = "none"; longBioText = false})}
}

export function aboutResponds() { 
    var aboutCard = document.querySelector(".about-me-card")
    function logSize() { 

      if(aboutCard.offsetHeight < 50)
      {document.querySelector("#about-me").style.display="none"}
      else if(aboutCard.offsetHeight > 50)
      {document.querySelector("#about-me").style.display="block"}
      
      if(aboutCard.offsetWidth > 950)
      {document.querySelector("#about-me-text").classList.add("two-columns");
      }
      else if(aboutCard.offsetWidth < 950)
      {document.querySelector("#about-me-text").classList.remove("two-columns")}

      if(aboutCard.offsetWidth < 350)
      {
      //document.querySelector(".about-me-card").style.backgroundColor = "green";
 
      document.querySelector(".about-me-card").style.gridTemplateColumns = "1fr";
      document.querySelector("#about-me").style.borderTop = "1px solid black";
      document.querySelector(".about-me-card > h2").style.margin = "-5px 0em";
      document.querySelector(".about-me-card > h2").style.paddingTop = "8px";
      document.querySelector("#about-me").style.borderLeft = "0px solid black";
      document.querySelector("#about-me").style.borderRight = "0px solid black";


    }

      else if(aboutCard.offsetWidth > 350)
      {

      //document.querySelector(".about-me-card").style.backgroundColor = "red";

      document.querySelector(".about-me-card").style.gridTemplateColumns = "0fr 1fr";
      document.querySelector(".about-me-card > h2").style.margin = "3px 0em";
      document.querySelector(".about-me-card > h2").style.paddingTop = "0px";


      document.querySelector("#about-me").style.borderRadius = "0px";
      document.querySelector("#about-me").style.borderLeft = "1px solid black";
      document.querySelector("#about-me").style.borderRight = "0px";
      document.querySelector("#about-me").style.borderTop = "none"}
    }
    let interval = setInterval(logSize, 100);
    setTimeout(function() {clearInterval(interval);}, 1500); 
  }
  