//skills data is on the main javascript file
function importAll(r) {
  return r.keys().map(r);
}
export const projects = [




  {
    title: "Portfolio: first attempt",
    date: "February 2023",
    description: "This is the first porfolio website I made. It is a very simple page where you scroll through the different sections; then there is a displaying page for the projects. ",
    images: importAll(require.context('../images/projects/oldporfolio', false, /\.(png|jpe?g|svg|gif)$/)),
    hashtags: "ruby on rails, Javascript, CSS, HTML",
    links: {"github": "https://github.com/gabrielardevol/portfolio", "website": "https://gabrielardevol.herokuapp.com/", "codepen":"https://codepen.io/gabrielardevol/pen/XWBzVLY"},
    },
{
    title: "JS Lettering",
    date: "January - february 2023",
    description: "To give my website a more unique appearance, I thought of a colorful design that expresses my creative spirit. I wanted an element that conveyed my background in the arts, as well as my passion for animation. Making this vision a reality was quite a challenge, as my experience with Javascript was almost none. Although the result could still be smoother, I am satisfied with how it gives my portfolio a more relaxed look." ,
    images: importAll(require.context('../images/projects/lettering', false, /\.(png|jpe?g|svg|gif)$/)),
    hashtags: "Javascript, CSS, hardcode",
    links: {"github": "https://github.chttps://github.com/gabrielardevol/portfolio/blob/master/app/assets/javascripts/lettering.jsom/gabrielardevol/portfolio", "website": "https://gabrielardevol.herokuapp.com/", "codepen":"https://codepen.io/gabrielardevol/pen/JjByKpL"},

},
{
  title: "Celler Ardèvol (website)",
  date: "January 2023",
  description: "This is the website for Celler Ardèvol, a small family business. In addition to computer science, I was also in charge of the content, developing the website from scratch in a holistic manner. It is a business website with a homepage (+ landing), an about section, a product section, and a contact section. It is written in ruby on rails and the frontend is in javascript, plain without frameworks. I integrated the landing page into the homepage in the form of a carousel that disappears with scrolling, aiming for a fluid minimalist result. For the various sections, I followed an austere approach, using a very versatile grid. In the coming months, I will try to enrich the content and test other design proposals."
 ,
 images: importAll(require.context('../images/projects/celler', false, /\.(png|jpe?g|svg|gif)$/)),
 hashtags: "ruby on rails, Javascript, CSS, HTML",
 links: {"website": "https://cellerardevol.herokuapp.com/", "github": "https://github.com/gabrielardevol/celler-ardevol", "codepen":"https://codepen.io/gabrielardevol/pen/zYLWLyV"},
  },
{
  title: "3_pigs_1_wolf.rb",
  date: "December 2022",
  description: "These are two simple video games based on the story of the three pigs.  The first is about escaping from the wolf, and the second is about repairing the pigs house before the wolf blows it down. They are designed to be played on the terminal console and use emojis as the minimum graphic element of the interface. Both games are configured in ruby, following the MVC pattern. They are written in a way that parameters can be easily modified: the distance to travel, the strength of the wolf, or the duration of the game. To play them, you need a console that accepts emojis; I used the Visual Studio Code console.",
  images: importAll(require.context('../images/projects/threepigs', false, /\.(png|jpe?g|svg|gif)$/)),
  hashtags: ["ruby", "MVC"],
  links: {"github": "https://github.com/gabrielardevol/els-tres-porquets"},

},
{
  title: "Portfolio using React",
  date: "February - march 2023",
  description: "Graphic design as an art and coding as a craft: the prority here has been to make something different than other portfolios. The idea of a respnsive dashboard came some months ago but I still hadn't the knowledge to execute it in code. Finally here it is, and seems a pretty pleasing result and a nice exercise of responsive design.",
  images: importAll(require.context('../images/projects/newporfolio', false, /\.(png|jpe?g|svg|gif)$/)),
  hashtags: "React, Javascript, CSS, Responsiveness",
  links: {"figma":"https://www.figma.com/file/ByAFpzhCYu5O2t5gyS99a2/portfolio---march-2023?node-id=1%3A3&t=sKu4ccPnXcdoLCLq-1"},
  },
];
