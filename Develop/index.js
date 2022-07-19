// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirerPrompt = function() {
    return inquirer
    .prompt([
    {
      type: 'input',
      message: 'What is your  name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Please enter your bio: ',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'Please enter your LinkedIn URL: ',
      name: 'linkedIn',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub URL: ',
      name: 'github',
    },
  ])
}
