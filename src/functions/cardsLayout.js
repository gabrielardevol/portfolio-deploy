//re-sizing cards layout when loading and resizing screen; 
//NOT the content, but the continent
import { projectsRespond } from './sectionProjects.js'
import { contactResponds } from './sectionContact.js'
import { aboutResponds } from './sectionAbout.js'

export function layoutRespond() {
  console.log("layout-respond")
  contactResponds()
  aboutResponds()
  projectsRespond()
}
window.onload = layoutRespond()
window.addEventListener('resize', layoutRespond); 

export function setGridStyles(columns, rows) {
  document.querySelector(".cards").style.gridTemplateColumns = columns;
  document.querySelector(".cards").style.gridTemplateRows = rows;
  layoutRespond()
}

export function logoExpand() {
  setGridStyles("1fr 0fr 1fr", "1fr 0fr 1fr");
}
export function aboutMeExpand() {
  setGridStyles("1fr 0fr 0fr", "1fr 0fr 0fr");
}
export function skillsExpand() {
  setGridStyles("0fr 0fr 12fr", "14fr 0fr 0fr");
}
export function contactExpand() {
  setGridStyles("12fr 0fr 0fr", "0fr 0fr 14fr");
}
