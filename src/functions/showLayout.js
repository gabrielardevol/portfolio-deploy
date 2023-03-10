
//add an event listener thats set .project-show-mobile display:none when screensize is superor to 450 and display block when inferior
import { projectsResponsiveness } from './projectsSection.js'
import { projects } from '../database/projectsDatabase.js'
import { logoResponds } from '../Portfolio.js'
import { layoutRespond} from '../functions/cardsLayout.js'


//window.addEventListener('resize', () => document.querySelector('.project-show-mobile').style.display = window.innerWidth >= 450 ? 'block' : 'none');


export function hydeContent(sectionId) {
  if(sectionId != "projects") {
   // document.querySelector(`#${sectionId}`).style.display="none"
  }
  if(sectionId = "projects") {
   // document.querySelector(".projectThumbnailsContainer").style.height = "100%"
    document.querySelectorAll(".projectThumbnail").forEach(function(item){
      item.style.height = "100%"
    })
  }
}

export function showContent(sectionId) {
  document.querySelector(`#${sectionId}`).style.display="block";
}


export function displayShowLayout() {
  layoutRespond()


   if (window.innerWidth > 450) {
     document.querySelector(".cards").style.width = "50%"
     document.querySelector(".show-layout").style.width = "50%"
     document.querySelector(".show-layout").style.margin = "10px 10px 10px 0px"
   }
   else if (window.innerWidth < 450) {
     document.querySelector(".show-layout-phone").style.width = "100%"
     document.querySelector(".show-layout-phone").style.height = "50vh"
     document.querySelector(".show-layout-phone").style.marginBottom = "10px"
    // hydeContent("contact");
    // hydeContent("projects");
    // hydeContent("skills");
     //hydeContent("about-me");
   }

   setTimeout(loadContent, 1)
 }


 export function hydeShowLayout() {
  layoutRespond()

  if (window.innerWidth > 450) {
   document.querySelector(".cards").style.width = "100%"
   document.querySelector(".show-layout").style.width = "0%"
   document.querySelector(".show-layout").style.margin = "10px 0px 1px 0px"
  }
  else if (window.innerWidth < 450) {
    document.querySelector(".show-layout-phone").style.width = "0%"
    document.querySelector(".show-layout-phone").style.height = "0vh"
    document.querySelector(".show-layout-phone").style.marginBottom = "0"
   }
 }

function loadContent() {
  if (window.location.href.match(/(\d+)$/)) {
   var index = window.location.href.match((/(\d+)$/))[1]
  } else {
    console.log('No match found.');
  }
  document.querySelector(".show-layout>h3").textContent = projects[index - 1].title
  document.querySelector(".text").textContent = projects[index - 1].description
  document.querySelector(".show-image").style.backgroundImage =  `url('${projects[index - 1].images[0]}')`;
  // console.log(projects)
  // console.log(projects[index-1])
  // console.log(projects[index-1].links)
  console.log(projects[index-1].links.github != null)
  console.log(projects[index-1].links.website != null)
  console.log(projects[index-1].links.codepen != null)

  if(projects[index-1].links.github){console.log("github"); document.querySelector("#link_github").style.display = "table-row"};
  if(projects[index-1].links.github){console.log("github"); document.querySelector("#link_github > a").href = projects[index-1].links.github};
  if(!projects[index-1].links.github){console.log("github"); document.querySelector("#link_github").style.display = "none"};

  if(projects[index-1].links.website){console.log("website"); document.querySelector("#link_website").style.display = "table-row"}
  if(projects[index-1].links.website){console.log("website"); document.querySelector("#link_website > a").href = projects[index-1].links.website};
  if(!projects[index-1].links.website){console.log("website"); document.querySelector("#link_website").style.display = "none"}

  if(projects[index-1].links.codepen){console.log("codepen"); document.querySelector("#link_codepen").style.display = "table-row"}
  if(projects[index-1].links.codepen){console.log("codepen"); document.querySelector("#link_codepen > a").href = projects[index-1].links.codepen};
  if(!projects[index-1].links.codepen){console.log("codepen"); document.querySelector("#link_codepen").style.display = "none"}


  if(projects[index-1].links.figma){console.log("figma"); document.querySelector("#link_figma").style.display = "table-row"}
  if(projects[index-1].links.figma){console.log("figma"); document.querySelector("#link_figma > a").href = projects[index-1].links.figma};
  if(!projects[index-1].links.figma){console.log("figma"); document.querySelector("#link_figma").style.display = "none"}


  //document.querySelector("#links-database").appendChild("th")
}
