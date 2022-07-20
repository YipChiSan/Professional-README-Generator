// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result = "";
  if (license) {
    switch(license) {
      case 'Apache License 2.0':
        return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
      case 'MIT license' :
        return `https://img.shields.io/badge/License-MIT-yellow.svg`;
      case 'GNU General Public License v3 (GPL v3)' :
        return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
      default:
        break;
    }
  }
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let result = "";
  if (license) {
    switch(license) {
      case 'Apache License 2.0':
        return `https://opensource.org/licenses/Apache-2.0`;
      case 'MIT license' :
        return `https://opensource.org/licenses/MIT`;
      case 'GNU General Public License v3 (GPL v3)' :
        return `https://www.gnu.org/licenses/gpl-3.0`;
      default:
        break;
    }
  }
  return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
