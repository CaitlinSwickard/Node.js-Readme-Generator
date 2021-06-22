// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  ${data.description}
  ${badge}

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * Contribution(#contribution)
  * [Tests](#tests)
  * Questions(#questions)
  
  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  This project is covered under the following license:
  ${data.license}

  ##Tests
  ${data.tests}

  ##Contribution
  ${data.contribution}
  
  ##Questions?
  Reach me here with additional questions:
  [Github Profile](https://www.github.com/${data.github})
  ${data.email}
`;
}

module.exports = generateMarkdown;
