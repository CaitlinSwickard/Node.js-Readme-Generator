// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] from choices in index.js
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case 'MIT':
      badge = '';
      break;
    case 'APACHE 2.0':
      badge = '';
      break;
    case 'GPL 3.0':
      badge = '';
      break;
    case 'BSD 3':
      badge = '';
      break;
    case 'NONE':
      break;
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case 'MIT':
      link = '';
      break;
    case 'APACHE 2.0':
      link = '';
      break;
    case 'GPL 3.0':
      link = '';
      break;
    case 'BSD 3':
      link = '';
      break;
    case 'NONE':
      break;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  ${data.description}
 
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is covered under the following license:
  * ${data.license}
  View license at:

  ## Tests
  ${data.tests}

  ## Contribution
  ${data.contribution}
  
  ## Questions?
  Reach me here with additional questions:
  [Github Profile](https://www.github.com/${data.github})
  ${data.email}
`;
}

module.exports = generateMarkdown;
