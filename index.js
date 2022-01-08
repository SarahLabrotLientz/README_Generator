// // Run this from the command line using 'node index.js'
// (function () {
//   console.log(this);
// })();

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const api = require("./utils/api")

// Questions User Answers
function askQuestions() {
  return inquirer.prompt([

  {
    message: "What is your GitHub username?",
    type: "input",
    name: "username"
  },
  {
    message: "What is your email?",
    type: "input",
    name: "email"
  },
  {
    message: "What is the URL of your GitHub project?",
    type: "input",
    name: "URL"
  },

  {
    message: "What's your project's title?",
    type: "input",
    name: "title"
  },
  {
    message: "Please provide an example of how your project can be used",
    type: "input",
    name: "usage"
  },
  {
    message: "Please provide a description of your project",
    type: "input",
    name: "description"
  },
  {
    message: "What packages need to be installed to run your project?",
    type: "input",
    name: "packages"
  },
  {
    type: "input",
    message: "What command is used to run a test",
    name: "tests",
  },
  {
    message: "What technologies were used to create your project?",
    type: "input",
    name: "technology"
  },
  {
    message: "Please chose your license",
    type: "list",
    name: "license",
    choices: ["APACHE", "MIT", "GPL", "BSD", "None"]
  },
  {
    message: "Including yourself please list out all contributors",
    type: "input",
    name: "contributor"
  }
]); // end of return 
}; // end of function 

// write the answers to a new README file
function writetoFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("You have successfully written your README file");
  });
};
// write the answers to a new README file
async function init() {
  try {
    const answers = await askQuestions();
    generateMarkdown(answers);
    writetoFile("README.md", generateMarkdown(answers));

    } catch (err) {
      console.log(err);
    }
};

init();
