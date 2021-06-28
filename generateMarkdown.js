// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] from choices in index.js
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'NONE':
      break;
  }
  return badge;
}



// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'APACHE 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      link = 'https://opensource.org/licenses/lgpl-3.0.html';
      break;
    case 'BSD 3':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'NONE':
      break;
  }
  return link;
}


// function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license);

  return `# ${data.title} ${badge}


  ## Description
  ${data.description}
  * For a preview video on using the app click [here.](https://drive.google.com/file/d/1rhCB5oYgqqUg-WVetsNjl7jOPZihIULE/view?usp=sharing)
 
  ### Table of Contents
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
  * ${badge}
  View license info at:
  * ${link}

  ## Tests
  ${data.tests}

  ## Contribution
  ${data.contribution}
  
  ## Questions?
  Reach me here with additional questions:
  - [My Github Profile](https://www.github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
