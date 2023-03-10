import { logoResponds } from "../Portfolio";


function createRows(string, columns, container) {                                                       //sets the rows where elements will be placed
  for (var i = 0; i < (string.length / columns); i++) {                       //iterator
  var row = container.appendChild(document.createElement("div"))                  //adds html row to html container
  row.id = `row${i + 1}`;                                                     // gives ID to row
  row.className = "row"}                                                      //assigns css class to row
}


function dataSetRows(i, columns){
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope
  // dataset guides interaction between elements
  if (elements[i].textContent != " ") {
    elements[i].classList.add("box-shadow");                        // indicates that the element is visible

    // spaces between words don't get dataset
    elements[i].setAttribute("data-row", `${(Math.ceil(((i) / columns)+0.1))//parent row
    }`);
    elements[i].setAttribute("data-active", "true");                        // indicates that the element is visible
    elements[i].setAttribute("data-merged", "false")}  else {elements[i].style.width = "0px"};

  }


function createElements(string, columns, fontWeight){                                                    //creates the elements for a given string and places the elements in the rows


  for (var i = 0; i < string.length; i++) {
                                       //iterator
    var row = document.querySelector(`#row${(Math.ceil(((i) / columns)+0.1))}`)     // determines which row belongs to the iterated element
    var div = row.appendChild(document.createElement("div"));                        // creates the element div
    div.id = `element${i+1}`                                                    // gives ID to element (it's index plus one)
    div.className = "character-container font-mono"
    div.style.fontWeight = fontWeight
    div.style.width = document.querySelector(".logo-container").dataset.size + "px"
    div.style.height = document.querySelector(".logo-container").dataset.size + "px"
    //assigns css class to element
    div.textContent = `${string[i]}`                                            // fills the element with text
    dataSetRows(i, columns)
    randomColorize(i)
  }}

  function randomColorize(i) {
    var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

    //const colors = ['#FF7373', '#739AFF', '#5BB8D6', '#FF9473'];
    const colors = ['rgba(255, 169, 142, 1)', 'rgba(68, 185, 222, 1)', 'rgba(255, 115, 115, 1)', 'rgba(122, 143, 255, 1)'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    if(elements[i].dataset.active) {
    elements[i].style.backgroundColor = randomColor;
    }
    else if (!elements[i].dataset.active) {elements[i].style.height = "0px"}
  }




function action(string) {
  document.querySelectorAll(".character-container").forEach(element => { element.style.transition = "width 0.8s ease-in-out, height 0.8s ease-in-out"});
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

   for (var i = 0; i < (string.length - 1); i++) {
      if (elements[i].dataset.active == "true" && elements[i].dataset.merged == "false" && elements[i+1].dataset.merged == "false") {
       if(Math.random()<0.09){merge(i)};
     } else if (elements[i].dataset.active == "true" && elements[i].dataset.merged == "true") {
       if(Math.random()<0.18){split(i)};
     }
   }

   setTimeout(() => {
    document.querySelectorAll(".character-container").forEach(element => { element.style.transition = "none"});
   }, 1500);

 }



 function merge(i) {
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

  if(elements[i].dataset.row === elements[i+1].dataset.row){
  elements[i].dataset.merged = "true";
  increaseWidth(i)
  hyde(i)
  elements[i].textContent += `${elements[i+1].textContent}`
  }
}

function hyde(i) {
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

  if (elements[i+1].textContent != " ") {elements[i+1].dataset.active = "false";} //sets "active" (not to blank spaces) TODO: apply hyde() function
  deleteWidth(i+1)

}

function split(i) {
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

  elements[i].textContent = `${elements[i].textContent[0]}`
  decreaseWidth(i)
  elements[i].dataset.merged = "false";
  elements[i+1].style.display = "flex"
  elements[i+1].dataset.active = "true"
  randomColorize(i+1)
  restoreWidth(i+1)
}

function increaseWidth(i) {
  var size = document.querySelector(".logo-container").dataset.size
  var measure = "px"
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

  elements[i].style.width = `${size * 1.5}` + measure;
  elements[i].style.height = size + measure;

}

function decreaseWidth(i) {
  var size = document.querySelector(".logo-container").dataset.size
  var measure = "px"
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

  elements[i].style.width = `${size}`  + measure;
}

function deleteWidth(i) {
  var size = document.querySelector(".logo-container").dataset.size
  var measure = "px"
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

  elements[i].style.width = "0" + measure;
  elements[i].style.height = "0" + measure;
  elements[i].style.color = "transparent";
}

function restoreWidth(i) {
  var size = document.querySelector(".logo-container").dataset.size
  var measure = "px"
  var elements = document.querySelectorAll(".character-container");              //this variable is still not full scope

  elements[i].style.width =  `${size}` + measure;
  elements[i].style.height =  `${size}` + measure;
  elements[i].style.color = "black";
  randomColorize(i+1)
}
let logoIsSet = false
export function setLogo() {

  setTimeout(() => {
    if(logoIsSet === false) {
    var logoContainer =  document.querySelector(".logo-container")
    createRows("gabriel ardèvol", 4, logoContainer)
    createElements("gabriel ardèvol", 4, 700)
    logoIsSet = true
    }

    logoResponds()

    setInterval(() => {
      //console.log("setLogo")
      action("gabriel ardèvol")
    }, 3000);

  }, 1);
}
window.onload = setLogo()
