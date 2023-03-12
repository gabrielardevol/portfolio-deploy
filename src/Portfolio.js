import './Stylesheet.scss';
import { displayShowLayout, hydeShowLayout, showContent, hydeContent } from './functions/showLayout.js'
import { projectsExpand, projectsRespond } from './functions/sectionProjects.js'
import { setGridStyles, aboutMeExpand, skillsExpand, contactExpand, logoExpand, layoutRespond} from './functions/cardsLayout.js'
import { projects } from './database/projectsDatabase.js'
import { setLogo} from './functions/logo.js'
import { showLongBio } from './functions/sectionAbout.js'
import githubLogo from './images/github-round.png';
import codePen from './images/codepen-round.webp';
import linkedIn from './images/linkedin.png';


function Card(props) {
  return (
    <div className={props.className + " " + props.section.replace(/\s+/g, '-') + "-card"}  style={props.style} >
      <h2 style={{}} onClick={props.onClick}>{props.section}</h2>
      <div className="card-second-column" id={props.id} style={{width: "100%"}}>
      {props.children}
      </div>
    </div>
  )
}
function Cards() {
  return (
  <div className="cards">
    <div section="logo" style={{gridArea: 'logo', minWidth:"280px", height:"fit-content", width:"100%", margin:"auto"}} onClick={logoExpand} className="logo-container" data-Size="50" />
    <Card id="about-me" section="about me" className={"card horizontal-text box-shadow"} style={{gridArea: 'first'}} onClick={aboutMeExpand}>
      <div class="can-toggle demo-rebrand-2" >
        <input id="e" type="checkbox" onClick={showLongBio}/>
        <label for="e">
          <div class="can-toggle__switch" style={{marginLeft: "1em", marginTop: "1em"}} data-checked="long bio" data-unchecked="short bio"></div>
        </label>
      </div>
      <p id="about-me-text" style={{maxWidth: '60ch'}}>
        
        Welcome to my website and porfolio, I am a front-end web developer with full-stack capabilities. If you’re here it’s probably because I’m looking for a job.
        <span className="long-bio-text">I think of myself as a bedroom hermit with social skills. As a teenager I spent a considerable amount hours learning software, and though I didn't code much back then, felt comfortable with computers since a young age. Later I studied a degree in arts and design. What seemed to be a laboral suicide lead me to grow interest in web developement until today.</span>
        Both in my career and personal life, I seek for ways to be playful while remaining profesional, creative and efective. As a designer i believe functionality is more important than aesthetics, but also that a unique visuality has it's own function in making something unique. As a developer I aim to make beautiful, different things, and I'm excited for all the things I still want to learn of this craft.
        <span className="long-bio-text">And as an illustrator I have a lot of fun, check my instagram if you're curious 😄. </span>
        If you are looking to do something unique, I might be your person. Please check out my projects! And here is my CV.
      </p>
    </Card>
    <Card id="skills" section="skills" className={"card vertical-text box-shadow"} style={{gridArea: 'second'}} onClick={skillsExpand}>
      <table className="skills-table">
        <thead >
          <tr><th></th></tr>
        </thead>
        <thead>
          <tr><th>Frontend</th></tr>
        </thead>
        <tbody>
          <tr><td>HTML</td></tr>
          <tr><td>CSS</td></tr>
          <tr><td>Javascript</td></tr>
        </tbody>
        <thead>
          <tr><th>Backend and control</th></tr>
        </thead>
        <tbody>
          <tr><td>React</td></tr>
          <tr><td>Ruby</td></tr>
          <tr><td>Rails</td></tr>
          <tr><td>Git & Github</td></tr>
          <tr><td>SQL</td></tr>

        </tbody>
        <thead>
          <tr><th>Graphic design</th></tr>
        </thead>
        <tbody>
          <tr><td>Photoshop</td></tr>
          <tr><td>Illustrator</td>
          </tr>
          <tr><td>Indesign</td></tr>
          <tr><td>Blender</td></tr>
        </tbody>
      </table>
    </Card>
    <Card id="projects" section="projects" className={"card horizontal-text box-shadow"} style={{gridArea: 'third'}} onClick={projectsExpand}>
      <div style={{height: "100%"}}>
        <div className={"project-thumbnails-container-target project-thumbnails-container-reel"}>
          {projects.map((item, index) => (
          <ProjectTumbnail  key={index + 2} location={`#project${index + 1}`} title={item.title} description={item.description} images={item.images}/>
          ))}
        </div>
      </div>
    </Card>
    <div id="project-show-phone" section="" className={"show-layout-phone box-shadow"}>
      <a onClick={hydeShowLayout} href="#">Hyde</a>
    </div>
    <Card id="contact" section="contact" className={"card vertical-text box-shadow"} style={{gridArea: 'fourth', display:"flex"}} onClick={contactExpand}>
      <div id="contact-first-column" style={{width: "100%", height: "100%", minWidth: "11em"}}>
        <div style={{height: "66%", backgroundColor: "white", display: "flex", alignItems: "center"}} id="me-pic-container">

          <div style={{margin: "auto", height: "inherit"}}>
              <div className="me-pic" style={{}} />
            <div>
              <div style={{display:"flex", margin: "auto", width: "fit-content", marginTop: "2em"}}>
                {
                [{id: "linkedIn", logo: linkedIn, "url": "https://www.linkedin.com/in/gabrielardevol/"},
                {id: "gitHub", logo: githubLogo, "url": "https://github.com/gabrielardevol"},
                {id: "codePen", logo: codePen, "url":"https://codepen.io/gabrielardevol/" }].map((item)=>
                <a href={item.url} target="_blank"><div className="social-media-logo" style={{backgroundImage: `url(${item.logo})`}}></div></a>)
                }
              </div>
            </div>
          </div>
        </div>

        <div style={{height: "34%"}}>
          {[{redText:"e-mail", content:"artsdevol@gmail.com"}, {redText:"whatsapp", content:"+34 646 18 16 10"}].map( item => (
          <div style={{height: (100/2) + "%"}}className="contact-info">
            <div className="red-text">{item.redText}</div>
            {item.content}
          </div>
          ))}
        </div>
      </div>

      <div id="contact-second-column" style={{backgroundColor: "red"}}>
      </div>

    </Card>
  </div>
  )
}
function ProjectTumbnail(props) {
  return (
      <div className={"project-thumbnail"}>
        <div className={"project-thumbnail-image"} style={{backgroundImage:`${props.images[0]}`}}>
        <img src={props.images[0]} alt="" style={{width:"100%", height:"100%", opacity:"0.9"}}/>
        </div>
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
  if (/^#[^\s]+$/.test(window.location.hash)) {
    window.onload = function() {
    displayShowLayout();
    }
  }
  return (
  <div className="layout">
    <Cards />
      <div className="show-layout box-shadow" style={{gridArea: 'third-show'}}>
        <div class="show-image">
          <button class="show-hide-button" onClick={hydeShowLayout}><a href="#">⨯</a></button>
        </div>
        <h3>Project Title</h3>
        <table id="show-links-table" style={{width:"100%"}}>
          <tr id="links-table" style={{display:"flex"}}>
            <th id="link_github" style={{display:"table-row", width:"-webkit-fill-available"}}><a href="" target="_blank" >github</a></th>
            <th id="link_website" style={{display:"table-row", width:"-webkit-fill-available"}}><a href="" target="_blank" >website</a></th>
            <th id="link_codepen" style={{display:"table-row", width:"-webkit-fill-available"}}><a href="" target="_blank" >codepen</a></th>
            <th id="link_figma" style={{display:"table-row", width:"-webkit-fill-available"}}><a href="" target="_blank" >figma</a></th>
          </tr>
        </table>
        <div class="show-text">
        <div class="text">Lorem ipsum</div>
      </div>
    </div>
  </div>
  )
}

export default Layout;
