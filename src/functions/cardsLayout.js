import { projectsRespond } from './projectsSection.js'
import { contactRespond } from './contactSection.js'
import { displayShowLayout, hydeShowLayout, showContent, hydeContent } from '../functions/showLayout.js'
import { logoResponds } from '../Portfolio.js'


export function setGridStyles(columns, rows) {

    console.log("setGridStyles")
  document.querySelector(".cards").style.gridTemplateColumns = columns;
  document.querySelector(".cards").style.gridTemplateRows = rows;

layoutRespond()


}

window.addEventListener('resize', layoutRespond);



export function layoutRespond() {
  console.log("layoutRespond")
  contactRespond()
  projectsRespond()
}

export function aboutMeExpand() {
  setGridStyles("12fr 4fr 0fr", "14fr 2fr 0fr");
  showContent("about-me");
  if (window.innerWidth > 450) {
    //hydeContent("projects");
    //hydeContent("skills");
    showContent("contact");
  }
}

export function skillsExpand() {
  setGridStyles("0fr 4fr 12fr", "14fr 2fr 0fr");
  showContent("skills");
  if (window.innerWidth > 450) {
    hydeContent("projects");
    hydeContent("contact");
    showContent("about-me");
  }
}

export function contactExpand() {
  setGridStyles("12fr 4fr 0fr", "0fr 2fr 14fr");
  showContent("contact");
  if (window.innerWidth > 450) {
    // execute your function here
    showContent("projects");
    hydeContent("skills");
    hydeContent("about-me");
  }
  else if (window.innerWidth < 450) {
}}
