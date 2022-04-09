const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
// // global variables
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");
// const pageHTML = generatePate(name, github);

// /* "file name that will be created, or output", dataThats(being,written), (callback function to handle errors/successes)*/
// fs.writeFile("index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
