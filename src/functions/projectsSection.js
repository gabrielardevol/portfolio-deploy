import { showContent, hydeContent } from './showLayout.js'
import { setGridStyles } from './cardsLayout.js'
import { layoutRespond  } from './cardsLayout.js'

export function projectsRespond() { //this function makes .projects-card responsive to changes in size
  console.log("projectsRespond")

  var projectCard = document.querySelector(".projects-card")
  console.log(projectCard)
  function logSize() { //this function checks .project-card size and applies style according to
    var projectThumbnailsContainer = document.querySelector(".project-thumbnails-container-target")

    if(projectCard.offsetHeight <= 50) { //if card is super small, it disapears (with opacity set to 0)
      document.querySelector("#projects").style.opacity = 0
    } else if(projectCard.offsetHeight <= 300) { // if card is small, it becomes an horizontal scroll reel
      projectThumbnailsContainer.classList.add("project-thumbnails-container-reel");
      projectThumbnailsContainer.classList.remove("project-thumbnails-container")
      document.querySelector("#projects").style.opacity = 1
    } else { //if the card is medium or big size, it's a grid with vertical scroll
      projectThumbnailsContainer.classList.remove("project-thumbnails-container-reel")
      projectThumbnailsContainer.classList.add("project-thumbnails-container")
    }
  }

  let interval = setInterval(logSize, 100);
  setTimeout(function() {clearInterval(interval);}, 1500); //this function executes logSize() repeatedly for 3 seconds
}

export function projectsExpand() { //when clicking at .project-card, it expands to make it's  content more visible
  console.log("projectsExpand")
  setGridStyles("0fr 4fr 12fr", "0fr 2fr 14fr");
  showContent("projects");
  document.querySelectorAll(".projectThumbnail").forEach(function(item){
  item.style.height = "0%"
  })
  if (window.innerWidth > 450) {
    showContent("skills");
  //  hydeContent("contact");
   // hydeContent("about-me");
  }
  layoutRespond()
}
