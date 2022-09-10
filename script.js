/* Students: Please use this week's project for Week 15: Assignment 13: Basic Mobile App. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
'use strict';
//define the dataset with array
const myAssignments= [
  {   title: "Introduction to JavaScript, Part 1", //1
      description: "Working on if, while and for statements.",
      imagepath:"1.png",
      url: "https://CS50C-Week03-32-MichaelBridgema.srjcethanwilde.repl.co"
},
{   title: "Introduction to JavaScript, Part 2",//2
      description: "Learning about objects and events.",
      imagepath:"2.png",
      url: "https://CS50C-Week04-25-MichaelBridgema.srjcethanwilde.repl.co"
},
{   title: "Map Visualization APIs",//3
      description: "Begin developing enhanced user interfaces by utilizing the capabilities of interactive geographic maps with the OpenLayers or Google Maps API.",
      imagepath:"3.png",
      url: "https://cs50c-week08-20-michaelbridgema.srjcethanwilde.repl.co/"
},
{   title: "Map-based mobile app",//4
      description: "Create an interactive experience that incorporates an external JSON file and a map.",
      imagepath:"4.png",
      url: "https://cs50c-week09-16-michaelbridgema.srjcethanwilde.repl.co/"
},
{   title: "Data Visualization, Part 1",//5
      description: "A data visualization that incorporates a HTML5 canvas element and geometric shapes.",
      imagepath:"5.png",
      url: "https://cs50c-week11-17-michaelbridgema.srjcethanwilde.repl.co/"
},
{   title: "Data Visualization, Part 2",//6
      description: "Using the D3.js JavaScript library together with my custom JavaScript code and an external JSON data file.",
      imagepath:"6.png",
      url: "https://cs50c-week12-16-michaelbridgema.srjcethanwilde.repl.co/"
},
{   title: "Phaser JavaScript Library, Part 1",//7
      description: "Using the Phaser JavaScript library together with my custom JavaScript code and external graphic.",
      imagepath:"7.png",
      url: "https://cs50c-week13-17-michaelbridgema.srjcethanwilde.repl.co/" 
},
{   title: "Phaser JavaScript Library, Part 2",//8
      description: "Creating my 8-bit game with Phaser3.",
      imagepath:"8.png",
      url: "https://cs50c-week14-16-michaelbridgema.srjcethanwilde.repl.co/"
}
];
console.log('array works');
// define a react page component using traditional pure JS
function ModuleList (module) {
  // return some output for the component using JSX
  return <div>
  <h1>{module.message1}</h1>
  <p>{module.message2}</p>
  <ol>
  {
    // use map() to loop thru array passed in module.module, creating new element for each array value
    module.list.map((item, index) => <li key={index}> <strong>{item.title}</strong> <br /> <a href ={item.url}><img src={item.imagepath} alt={item.title} /></a><br /> {item.description}<br /><br />
    </li>
    )
  }
  </ol>
  </div>;
}
//render componet to page
ReactDOM.render(
  // for tag take function name
  <ModuleList list={myAssignments}
  message1="My Eight Favorite Assignments from 50C" message2="Click on the image to go to the site." />,
  document.getElementById('myAssignment')
);