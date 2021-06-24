// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled 
// License that explains which license the application it is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//---------------------------------------------------------------------------------------- 


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  // Title of Project
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
  },

  // Description of project
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of this project.'
  },

  // Installation instructions
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for this project?'
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
    message: 'What are your contribution guidelines for users?'
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data)
};



// TODO: Create a function to initialize app
// use the spread operator in the writeToFile();
function init() {
  inquirer.prompt(questions)
    .then(response => {
      console.log(response);
      writeToFile('Readme.md', generateMarkdown({ ...response }))
    })
};

// Function call to initialize app
init();
 