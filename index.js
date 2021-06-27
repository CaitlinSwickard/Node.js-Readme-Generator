
// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user input
const questions = [
  // Title of Project
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
  },

  // Description of project
  {
    type: 'input',
    name: 'description',
    message: 'What is this project about? Give a detailed description of the project.'
  },

  // Installation instructions
  {
    type: 'input',
    name: 'installation',
    message: 'What does the user need to install to run this app?'
  },

  // Usage information
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about running this app?'
  },

  // License options
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license.',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },

  // Contribution guidelines
  {
    type: 'input',
    name: 'contribution',
    message: 'Who contributed to this project?'
  },

  // Tests
  {
    type: 'input',
    name: 'tests',
    message: 'What instructions are there for the user to test this app?'
  },

  // Github username
  {
    type: 'input',
    name: 'github',
    message: 'Please link your Github username.'
  },

  // Email address
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data)
};



// function to initialize app

function init() {
  inquirer.prompt(questions)
    .then(response => {
      // console.log(response);
      writeToFile('README.md', generateMarkdown({ ...response }))
    })
};

// Function call to initialize app
init();
 