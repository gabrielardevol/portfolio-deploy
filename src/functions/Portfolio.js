import './Stylesheet.scss';
import { displayShowLayout, hydeShowLayout, showContent, hydeContent } from './functions/showLayout.js'
import { projectsExpand, projectsRespond } from './functions/projectsSection.js'
import { setGridStyles } from './functions/cardsLayout.js'
import { projects } from './database/projectsDatabase.js'

projectsRespond()

function Card(props) {
  return (
    <div className={props.className + " " + props.section.replace(/\s+/g, '-') + "-card"}  style={props.style} >
      {/* <div className="h-container"  onClick={props.onClick}> */}
        <h2 style={{}} onClick={props.onClick}>{props.section}</h2>
      {/* </div> */}
      <div className="card-second-column" id={props.id}>
      {props.children}
      </div>
    </div>
  )
}

function Cards() {


  function aboutMeExpand() {
    setGridStyles("12fr 4fr 0fr", "14fr 2fr 0fr");
    showContent("about-me");
    if (window.innerWidth > 450) {
      //hydeContent("projects");
      //hydeContent("skills");
      showContent("contact");
    }
  }

  function skillsExpand() {
    setGridStyles("0fr 4fr 12fr", "14fr 2fr 0fr");
    showContent("skills");
    if (window.innerWidth > 450) {
      //hydeContent("projects");
      //hydeContent("contact");
      showContent("about-me");
    }
  }



  function contactExpand() {
    setGridStyles("12fr 4fr 0fr", "0fr 2fr 14fr");
    showContent("contact");
    if (window.innerWidth > 450) {
      // execute your function here
      showContent("projects");
      //hydeContent("skills");
      //hydeContent("about-me");
    }
    else if (window.innerWidth < 450) {


  }}

  function logoClick() {
    setGridStyles("1fr 1fr 1fr", "1fr 1fr 1fr");
    ["projects", "skills", "contact", "about-me"].forEach(section => showContent(section)); //pass function showContent() to each value
  }

  //const items = ['Item 1', 'Item 2', 'Item 3', 'Project 4 title is so long', 'project5', 'project6', 'Item 1', 'Item 2', 'Item 3', 'Project 4 title is so long', 'project5', 'project6'];
  return (
  <div className="cards">
    <div section="logo" style={{gridArea: 'logo'}} onClick={logoClick}>LOGO</div>
    <Card id="about-me" section="about me" className={"card horizontal-text"} style={{gridArea: 'first'}} onClick={aboutMeExpand}>
      testing
    </Card>
    <Card id="skills" section="skills" className={"card vertical-text"} style={{gridArea: 'second'}} onClick={skillsExpand}>
      <table className="skills-table">
        {/* <table> */}
          <thead >
          <tr>
              <th></th> {/* bad practice */}
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Frontend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML</td>
            </tr>
            <tr>
              <td>CSS</td>
            </tr>
            <tr>
              <td>Javascript</td>
            </tr>
          </tbody>
        {/* </table> */}
        {/* <table> */}
        <thead>
          <tr>
            <th>Backend and control</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
          </tr>
          <tr>
            <td>Ruby</td>
          </tr>
          <tr>
            <td>Rails</td>
          </tr>
          <tr>
            <td>Git & Github</td>
          </tr>
        </tbody>
        {/* </table> */}
        {/* <table> */}

        <thead>
          <tr>
            <th>Graphic design</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>Photoshop</td>
          </tr>
          <tr>
            <td>Illustrator</td>
          </tr>
          <tr>
            <td>Indesign</td>
          </tr>
          <tr>
            <td>Blender</td>
          </tr>
        </tbody>
        {/* </table> */}

      </table>
    </Card>

    <Card id="projects" section="projects" className={"card horizontal-text"} style={{gridArea: 'third'}} onClick={projectsExpand}>


    <div style={{height: "100%"}}>
      <div className={"project-thumbnails-container-target project-thumbnails-container-reel"}>
        {projects.map((item, index) => (
        <ProjectTumbnail  key={index + 2} location={`#project${index + 1}`} title={item.title} description={item.description}/>
        ))}
      </div>
    </div>



    </Card>
    <div id="project-show-phone" section="" className={"show-layout-phone"}>
     <div>hello</div>
      <a onClick={hydeShowLayout} href="#">Hyde</a>
    </div>
    <Card id="contact" section="contact" className={"card vertical-text"} style={{gridArea: 'fourth'}} onClick={contactExpand}>

    </Card>

  {/* <Card text="view" className={"card vertical-text"} style={{gridArea: 'view'}} /> */}
  </div>
  )
}

function ProjectTumbnail(props) {
  return (
      <div className={"project-thumbnail"}>
        <div className={"project-thumbnail-image"}/>
        <a href={props.location} onClick={displayShowLayout}>

        <div className={"project-thumbnail-text"}>
          <h3>{props.title}</h3>
          <div>{props.description}</div>
        </div>
        </a>

      </div>

  )
}

function Layout() {

// Check if the URL has a hash followed by any characters
  if (/^#[^\s]+$/.test(window.location.hash)) {
  // Call your function
  window.onload = function() {
    displayShowLayout();
  }
}

  return (
  <div className="layout">
    <Cards />
    <div className="show-layout" style={{gridArea: 'third-show'}}>
      <div class="show-image">      <button class="show-hide-button" onClick={hydeShowLayout}><a href="#">⨯</a></button>
      </div>
      <img src="https://i.ytimg.com/vi/mlBZeNKCbSI/maxresdefault.jpg"/>
      <h3>Project Title</h3>

<table id="show-links-table">
 <tr>
   <th>Header 1</th>
   <th>Header 2</th>
   <th>Header 3</th>
  </tr>
</table>
      <div class="show-text">

<div class="text">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>

      </div>

    </div>
  </div>
  //maybe use ID instead of class, for URL purposes
  )
}

export default Layout;
