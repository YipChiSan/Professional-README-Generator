// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'userName',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is your project description?',
    name: 'projectDesc',
  },
  {
    type: 'input',
    message: 'What is your installation guide? ',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What is the usage of your app?',
    name: 'usage',
  },
  {
    type: 'list',
    message: "What is the license of this project?",
    choices: ['Apache License 2.0', 'MIT license', 'GNU General Public License v3 (GPL v3)'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'What is the contribution guideline?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What is the test instruction of this project?',
    name: 'test',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, () => console.log("Done"));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      let markdownData = generateMarkdown(answers);
      writeToFile("GeneratedMakrdown.md", markdownData);
    });
}

// Function call to initialize app
init();

