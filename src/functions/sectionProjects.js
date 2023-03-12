import { showContent } from './showLayout.js'
import { setGridStyles } from './cardsLayout.js'
import { layoutRespond  } from './cardsLayout.js'

export function projectsRespond() { 
  var projectCard = document.querySelector(".projects-card")
  function logSize() { 
    var projectThumbnailsContainer = document.querySelector(".project-thumbnails-container-target")
    if(projectCard.offsetHeight <= 50) { document.querySelector("#projects").style.opacity = 0 } 
    else if(projectCard.offsetHeight <= 300) { 
      projectThumbnailsContainer.classList.add("project-thumbnails-container-reel");
      projectThumbnailsContainer.classList.remove("project-thumbnails-container");
      document.querySelector("#projects").style.opacity = 1}
    else {
      projectThumbnailsContainer.classList.remove("project-thumbnails-container-reel")
      projectThumbnailsContainer.classList.add("project-thumbnails-container")
    }
  }
  let interval = setInterval(logSize, 100);
  setTimeout(function() {clearInterval(interval);}, 1500); 
}

export function projectsExpand() { 
  setGridStyles("0fr 0fr 12fr", "0fr 0fr 14fr");
  showContent("projects");
  document.querySelectorAll(".projectThumbnail").forEach(function(item){
    item.style.height = "0%"
  })
  layoutRespond()
}
